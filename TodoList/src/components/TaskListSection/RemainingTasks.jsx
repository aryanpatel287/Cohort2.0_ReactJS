import React, { useState } from 'react'
import TaskCard from '../common/TaskCard'
import { ChevronRight } from 'lucide-react'

const RemainingTasks = ({ allTasks, setAllTasks }) => {
    const [taskListActive, setTaskListActive] = useState(true)

    if (allTasks.some(task => task.isCompleted === false)) {
        return (
            <div className='w-full flex flex-col gap-1'>
                {/* Tasklist Label  */}
                <div
                    onClick={() => { setTaskListActive(!taskListActive) }}
                    className='w-full flex items-center gap-2 '
                >
                    <ChevronRight
                        size={20}
                        color="rgba(255, 255, 255, 0.577)"
                        strokeWidth={2}
                        className={taskListActive ? 'rotate-90 transition delay-150 duration-300 ease' : 'rotate-0 transition delay-150 duration-300 ease'}
                    />
                    <h3>Remaining Tasks</h3>
                </div>

                {/* All tasks  */}
                <div className={taskListActive ? 'task-list-dropdown list-active' : 'task-list-dropdown'}>
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

            </div>
        )
    }
}

export default RemainingTasks
