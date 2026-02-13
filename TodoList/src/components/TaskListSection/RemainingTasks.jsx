import React from 'react'
import TaskCard from '../common/TaskCard'

const RemainingTasks = ({ allTasks, setAllTasks }) => {
    if (allTasks.some(task => task.isCompleted === false)) {
        return (
            <div className='w-full flex flex-col gap-1'>
                <h3 className='mb-3 -ml-2'>Remaining Tasks</h3>
                {allTasks.map(({ description, isCompleted }, idx) => {
                    if (isCompleted === false) {
                        return <TaskCard
                            key={idx}
                            idx={idx}
                            description={description}
                            isCompleted={isCompleted}
                            allTasks={allTasks}
                            setAllTasks={setAllTasks}
                        />
                    }
                    return null
                })}
            </div>
        )
    }
}

export default RemainingTasks
