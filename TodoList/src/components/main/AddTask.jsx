import React, { useState } from 'react'

const AddTask = ({ allTasks, setAllTasks }) => {

    const [task, setTask] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = { description: task, isCompleted: false }
        setAllTasks(prev => [...prev, newTask])
        setTask('')
    }
    return (
        <div>
            <form
                className='w-full h-12 flex items-center justify-center gap-3'
                onSubmit={(e) => { handleSubmit(e) }}
            >
                <input
                    type="text"
                    name='task'
                    id='task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className='glass-effect px-2 py-1 rounded-xl'
                />
                <button type="submit" className='glass-effect px-2 py-1 rounded-xl active:scale-95 cursor-pointer'>
                    Add Task
                </button>

            </form>
        </div>
    )
}

export default AddTask
