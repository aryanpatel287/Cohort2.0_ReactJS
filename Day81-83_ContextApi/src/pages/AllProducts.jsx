import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import Product from '../components/Product'

const AllProducts = () => {
  const products = useContext(ProductDataContext)

  if (products.length === 0) {
    return (
      <div className='p-8'>
        <h1 className='text-3xl'>Loading products...</h1>
      </div>
    )
  }

  return (
    <div className='all-products-wrapper flex flex-wrap gap-4 p-4'>
      {products.map(product => (
        <Product key={product.id} productId={product.id} />
      ))}
    </div>
  )
}

export default AllProducts
