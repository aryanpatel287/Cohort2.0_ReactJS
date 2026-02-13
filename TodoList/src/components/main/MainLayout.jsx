import React from 'react'
import TodoApp from './TodoApp'

const MainLayout = () => {
    return (
        <div
            className='w-screen h-screen flex items-center justify-center'
        >
            <div className="todo-list-wrapper glass-effect">
            <TodoApp/>
            </div>
        </div>
    )
}

export default MainLayout
