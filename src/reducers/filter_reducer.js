import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
//
const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    //
    let maxPrice = action.payload.map((prod) => prod.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    //if [] it will not display anything if no match
    let tempProduct = [...filtered_products];
    if (sort === 'price-lowest') {
      tempProduct = tempProduct.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      tempProduct = tempProduct.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      tempProduct = tempProduct.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === 'name-z') {
      tempProduct = tempProduct.sort((a, b) => b.name.localeCompare(a.name));
    }
    //if no match I still can display something
    return { ...state, filtered_products: tempProduct };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const{all_products} = state
    const{text,category,price,shipping} = state.filters
let tempProducts = [...all_products]//fresh copy of product can be empty
//after filtering return []
if(text){
  tempProducts=tempProducts.filter(product=>product.name.toLowerCase().startsWith(text)
  )
}
if(category !=='all') {
  tempProducts=tempProducts.filter(product=>product.category === category)
}
if(price) {
  tempProducts=tempProducts.filter(product=>product.price <= price)
}
if(shipping) {
  tempProducts=tempProducts.filter(product=>product.shipping === true)
}




    return { ...state,filtered_products:tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
       ...state.filters,
        text: '',
        category: 'all',
      
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
