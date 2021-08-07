import React from 'react';
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';

const todoList = [{
  item: 'todo',
  done: false,
  id: 234234,
}, {
  item: 'todo2',
  done: false,
  id: 45454,
}]

function App() {
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
