import React from 'react'
import TaskRow from './TaskRow'

const TaskTable = ({tasks, toggelTask, showCompleted=false}) => {
    const taskTableRows = (doneValue) =>{
        return(
            tasks
            .filter(task => task.done === doneValue)
            .map((task) =>(
                <TaskRow task={task} key={task.name} toggelTask={toggelTask} />
            ))
        )
    }
    return (
        <table className='table table-dark table-bordered table-striped border-secondary'>
            <thead>
                <tr className='table-primary'>
                    <th>Tareas</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showCompleted)
                }
            </tbody>
        </table>
        
    )
}

export default TaskTable