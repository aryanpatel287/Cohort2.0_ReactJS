import React from 'react'
import { ListX } from 'lucide-react';

const TaskCard = ({ idx, description, isCompleted, allTasks, setAllTasks }) => {
    function taskCompletion() {
        setAllTasks(prev =>
            prev.map((task, i) =>
                i === idx ? { ...task, isCompleted: !task.isCompleted } : task
            )
        )
    }
    
    function taskDeletion(){
        setAllTasks(prev => prev.filter((_, i) => i !== idx))
    }

    return (
        <div
            className='task-card w-full h-fit glass-effect rounded-xl px-2 py-1 flex gap-4 items-center relative'
            key={idx}
        >
            <input
                type="checkbox"
                name="completeTask"
                id={`completeTask-${idx}`}
                checked={isCompleted}
                onChange={taskCompletion}
                className="custom-checkbox"
            />
            <p>{description}</p>
            <ListX
                size={20}
                color="#ef4444"
                strokeWidth={2}
                onClick={taskDeletion}
                className="card-delete cursor-pointer hover:scale-110 transition-transform absolute right-6"
            />
        </div>
    )
}

export default TaskCard
