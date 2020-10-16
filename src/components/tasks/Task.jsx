import React from 'react'
import moment from 'moment'
import { removeTask, toggleChecked } from '../../actions/taskActions'
import { connect } from 'react-redux'
import Check from './Check'

const Task = ({task, removeTask, toggleChecked}) => {

    const handleRemove = task => {
        removeTask(task);
    };

    const handleChecked = task => {
        toggleChecked(task);
    };

    return (
        <>
             <tr>
            <th>{task.task} </th>
            <td>{moment(task.date.toDate()).calendar()}</td>
            <td>
                <Check onClick={()=> handleChecked(task)} checked={task.checked}/>
            </td>
            <td><span 
            className="material-icons text-danger" 
            style={{cursor: "pointer"}} 
            onClick={() => handleRemove(task) }
            >delete</span></td>
            </tr>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        removeTask: (task) => dispatch(removeTask(task)),
        toggleChecked: (task) => dispatch(toggleChecked(task)),
    }
}

export default connect(null, mapDispatchToProps) (Task);
