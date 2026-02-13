import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <div
            className='bg-amber-400 absolute bottom-0 w-screen p-4 flex justify-between'
        >
            <h1 className='text-2xl'>Footer</h1>

            <button
                className=' p-2 rounded-xl bg-red-500 cursor-pointer'
                onClick={() => {
                    navigate('/Home')
                }}
            >
                Explore Dashboard
            </button>
        </div>
    )
}

export default Footer
