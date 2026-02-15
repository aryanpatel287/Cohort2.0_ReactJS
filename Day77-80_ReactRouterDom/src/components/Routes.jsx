import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Dashboard from './Dashboard'
import RandomPage from './RandomPage'
import NotFoundPage from './NotFoundPage'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} >
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Route>
            <Route path='/:id' element={<RandomPage />} />
            <Route path='/*' element={<NotFoundPage />} />
        </Routes>
    )
}

