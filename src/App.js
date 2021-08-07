import React from 'react';
import Input from './components/Input';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        {/* done */}
        <Input />
      </div>

    </div>
  );
}

export default App;
