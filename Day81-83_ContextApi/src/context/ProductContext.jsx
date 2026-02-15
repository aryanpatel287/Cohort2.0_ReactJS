import React, { createContext, useState, useEffect } from 'react'
import { getAllProductsData } from '../api/StoreApi'

export const ProductDataContext = createContext()

const ProductContext = ({ children }) => {

    const [allProductsData, setProductData] = useState('')

    const setData = async () => {
        setProductData(await getAllProductsData())
    }
    useEffect(() => {
        setData()
    }, [])

    return (
        <ProductDataContext.Provider value={allProductsData}>
            {children}
        </ProductDataContext.Provider>
    )
}

export default ProductContext
