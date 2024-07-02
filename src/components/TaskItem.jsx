import React from 'react';

import { useDispatch } from 'react-redux';

import {removeTask, toggleTaskCompleted} from '../store/taskSlice';

const TaskItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();

  return (
    <li className='task-item'>
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTaskCompleted(id))} />
        <span>{text}</span>
        <span className='delete' onClick={() => dispatch(removeTask(id))}>&times;</span>
    </li>
  )
}

export default TaskItem