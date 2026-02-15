import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AllProducts from '../pages/AllProducts'
import ProductDetails from '../pages/ProductDetails'

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<AllProducts/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
        </Routes>
    )
}
