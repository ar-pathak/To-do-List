import React, { useState } from 'react'
import ToDoStatusCard from '../utils/ToDoStatusCard'
import { tasks } from '../../constaintData'
import VitalCards from '../utils/VitalCards'

const VitalTask = () => {
    const [isClicked, setIsClicked] = useState(null)
    return (
        <div>
            <div>
                {
                    tasks.map((task) => (
                        <div key={task.id} onClick={() => setIsClicked(isClicked == task.id ? null : task.id)} className='mb-4'>
                            <ToDoStatusCard
                                title={task.title}
                                description={task.description}
                                priority={task.priority}
                                status={task.status}
                                image={task.image}
                                createdAt={task.createdAt}
                            />
                            <div className={isClicked === task.id ? 'block' : 'hidden'}>
                                <VitalCards
                                    title={task.title}
                                    description={task.description}
                                    priority={task.priority}
                                    status={task.status}
                                    image={task.image}
                                    createdAt={task.createdAt} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default VitalTask