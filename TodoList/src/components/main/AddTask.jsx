import React, { useState } from 'react'

const AddTask = ({ allTasks, setAllTasks }) => {

    const [task, setTask] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = { description: task, isCompleted: false }
        setAllTasks(prev => [...prev, newTask])
        setTask('')
        localStorage.setItem('allTasks',JSON.stringify(allTasks))
    }
    return (
        <div>
            <form
                className='w-full flex items-center justify-center gap-3 flex-col md:flex-row'
                onSubmit={(e) => { handleSubmit(e) }}
            >
                <input
                    type="text"
                    name='task'
                    id='task'
                    value={task}
                    required
                    onChange={(e) => setTask(e.target.value)}
                    className='glass-effect px-2 py-1 rounded-xl w-full md:flex-1'
                />
                <button type="submit" className='glass-effect px-2 py-1 rounded-xl active:scale-95 cursor-pointer w-10/12 md:w-fit'>
                    Add Task
                </button>

            </form>
        </div>
    )
}

export default AddTask
