import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem'

const TasksList = () => {
    const tasks = useSelector(state => state.tasks.tasks);

  return (
    <ul className='task-list'>
        {tasks.map(task => <TaskItem key={task.id} {...task} />)}
    </ul>
  )
}

export default TasksList