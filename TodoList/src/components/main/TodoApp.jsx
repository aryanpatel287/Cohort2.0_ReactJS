import React, { useEffect, useState } from 'react'
import AddTask from '../main/AddTask'
import TaskList from '../TaskListSection/TaskList'

const TodoApp = () => {
    const [allTasks, setAllTasks] = useState([])
    useEffect(() => {

        console.log(allTasks)
    }, [allTasks])

    let tasks = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
    return (
        <div className='w-full h-full p-3 flex flex-col'>
            <AddTask allTasks={allTasks} setAllTasks={setAllTasks} />
            <TaskList allTasks={allTasks} setAllTasks={setAllTasks} />
        </div>
    )
}

export default TodoApp
