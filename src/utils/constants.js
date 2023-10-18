import React from 'react'

import {
  GiStabbedNote,
  GiTreehouse,
  GiStrikingDiamonds
} from 'react-icons/gi';

//for links is not necessary to import react
//for sidebar use
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  
 
]
//import react is a must for servicers
export const services = [
  {
    id: 1,
    icon: <GiTreehouse />,
    title: 'mission',
    text: 'Crafting comfort, style, and joy. Delivering personalized furniture that transforms spaces into havens of relaxation and inspiration.',
  },
  {
    id: 2,
    icon: <GiStrikingDiamonds />,
    title: 'vision',
    text: 'To redefine furniture design through innovative creations that blend form and function, elevating the way people experience their living spaces.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Decades of passion and expertise. Pioneering excellence in furniture design, creating cherished pieces for countless homes worldwide.',
  },
];

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
