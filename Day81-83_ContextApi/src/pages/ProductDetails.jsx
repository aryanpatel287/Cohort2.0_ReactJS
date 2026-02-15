import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetails = () => {
    const { id } = useParams()
    const AllProductsData = useContext(ProductDataContext)

    if (AllProductsData.length <= 0) {
        return <h1 className='text-3xl p-8'>Loading product...</h1>
    }

    const ProductData = AllProductsData.find(product => product.id === parseInt(id))

    if (!ProductData) {
        return <h1 className='text-3xl p-8'>Product not found</h1>
    }

    return (
        <div className='product-card flex-1/6 h-[400px] rounded-2xl p-4 flex flex-col justify-between gap-2'>
            <img
                src={ProductData.image}
                alt={ProductData.title}
                className='h-[60%] w-full object-contain'
            />
            <h2 className='text-4xl'>{ProductData.title}</h2>
            <div className='text-3xl'>${ProductData.price}</div>
            <p className='text-xl'>{ProductData.description}</p>
        </div>
    )
}

export default ProductDetails
