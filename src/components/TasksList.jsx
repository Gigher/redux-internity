import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TasksList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);  
  }, [tasks]);

  const handleFilter = (filterType) => {
    let newFilteredTasks;
    switch (filterType) {
      case 'all':
        newFilteredTasks = tasks;
        break;
      case 'completed':
        newFilteredTasks = tasks.filter(task => task.completed);
        break;
      case 'active':
        newFilteredTasks = tasks.filter(task => !task.completed);
        break;
      default:
        newFilteredTasks = tasks;
    }
    setFilteredTasks(newFilteredTasks);
  };

  return (
    <ul className='task-list'>
      <div>
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('completed')}>Completed</button>
        <button onClick={() => handleFilter('active')}>Active</button>
      </div>

      {filteredTasks.map(task => <TaskItem key={task.id} {...task} />)}
    </ul>
  );
};

export default TasksList;