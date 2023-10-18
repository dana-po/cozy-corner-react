//format price is international to help with the prices bc is calculated with cents
export const formatPrice = (price) => {
    const newPrice = Intl.NumberFormat('en-GB',{
        style:'currency',
        currency: 'GBP'
    }).format(price / 100)
    //100 pence
return newPrice
}

export const getUniqueValues = (data,type) => {
let unique = data.map(item=>item[type])
return ['all',...new Set(unique)]
}
