import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center'>
            <h1 className='text-4xl'>
                The Best Store You Will ever Visit
            </h1>
            <button
                className='px-4 py-2 bg-black text-white rounded-xl cursor-pointer active:scale-95'
                onClick={() => navigate('/products')}
            >
                Explore All Products
            </button>
        </div>
    )
}

export default Home
