import React from 'react'
import TaskCard from '../common/TaskCard'
import CompletedTasks from './CompletedTasks'
import RemainingTasks from './RemainingTasks'

const TaskList = ({ allTasks, setAllTasks }) => {
    return (
        <div className='task-list w-full flex-1 my-4 px-4 flex flex-col gap-4 overflow-y-auto'>
            <RemainingTasks allTasks={allTasks} setAllTasks={setAllTasks} />
            <CompletedTasks allTasks={allTasks} setAllTasks={setAllTasks} />
        </div>
    )
}

export default TaskList
