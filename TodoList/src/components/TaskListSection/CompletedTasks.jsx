import React from 'react'
import TaskCard from '../common/TaskCard'

const CompletedTasks = ({ allTasks, setAllTasks }) => {
    if (allTasks.some(task => task.isCompleted === true)) {
        return (
            <div className='w-full flex flex-col gap-1'>
                <h3 className='mb-3 -ml-2'>Completed Tasks</h3>
                {allTasks.map(({ description, isCompleted }, idx) => {
                    if (isCompleted === true) {
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

export default CompletedTasks
