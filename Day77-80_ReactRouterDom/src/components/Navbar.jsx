import React from 'react'
import { NavLink, redirect } from 'react-router-dom'

const Navbar = () => {
    return (
        <div
            className='flex items-center w-screen bg-gray-900 p-4 text-xl gap-4'
        >
            <NavLink to={'/home'}
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'white'
                })}
            >Home</NavLink>
            <NavLink to={'/about'}
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'white'
                })}
            >About</NavLink>
            <NavLink to={'/home'}
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'white'
                })}
            >Home</NavLink>
        </div>

    )
}

export default Navbar
