import React, { useEffect, useState } from 'react'
import AddTask from '../main/AddTask'
import TaskList from '../TaskListSection/TaskList'

const TodoApp = () => {
    const [allTasks, setAllTasks] = useState(() => {
        const savedTasks = localStorage.getItem('allTasks')
        return savedTasks ? JSON.parse(savedTasks) : []
    })

    useEffect(() => {
        localStorage.setItem('allTasks', JSON.stringify(allTasks))
    }, [allTasks])

    return (
        <div className='w-full h-full p-3 flex flex-col'>
            <AddTask allTasks={allTasks} setAllTasks={setAllTasks} />
            <TaskList allTasks={allTasks} setAllTasks={setAllTasks} />
        </div>
    )
}

export default TodoApp
