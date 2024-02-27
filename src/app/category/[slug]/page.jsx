import MainProducts from '@/app/products/MainProducts'

import React from 'react'

export default function page(params) {
    const productCard = mainProducts.find(product => product.title.split(' ').join('-') == params.slug)
  return (
    <div>
      
    </div>
  )
}
