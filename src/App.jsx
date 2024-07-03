import { useState } from 'react';
import './App.css';
import { ulid } from 'ulid';
import { useDispatch } from 'react-redux';

import { addTask } from './store/taskSlice';

import TasksList from './components/TasksList';
import InputField from './components/InputField';

function App() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => dispatch(addTask(text));

  return (
    <div className="App">
      <h1 className=''>Redux</h1>

      <div>
        <h2 className='text-9xl'>Task list</h2>

        <InputField text={text} handleInput={setText} handleSubmit={addTodo} />

        <TasksList />
      </div>
    </div>
  );
}

export default App;