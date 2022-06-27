import React from 'react'

const TaskRow = ({task, toggelTask}) => {
    return (
        <tr >
            <td className=' d-flex justify-content-between'>
                {task.name}
                <div className='form-check form-switch'>
                    <input 
                        className='form-check-input'
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggelTask(task)}
                    />
                </div>
            </td>
        </tr>
    )
}

export default TaskRow