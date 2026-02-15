import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Product = ({ productId }) => {
  const allProducts = useContext(ProductDataContext)
  const product = allProducts.find(p => p.id === productId)
  const navigate = useNavigate()

  if (!product) return null

  return (
    <div
      className='product-card flex-1/6 h-[400px] rounded-2xl p-4 flex flex-col justify-between gap-2 cursor-pointer'
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <img
        src={product.image}
        alt={product.title}
        className='h-[60%] w-full object-contain hover:scale-105 transition duration-300 ease-out'
      />
      <h2>{product.title}</h2>
      <div className='flex items-center justify-between'>
        ${product.price}
        <button className='px-4 py-2 bg-black text-white rounded-xl cursor-pointer transition duration-150 ease active:scale-95 hover:scale-102'>
          View Product
        </button>
      </div>
    </div>
  )
}

export default Product
