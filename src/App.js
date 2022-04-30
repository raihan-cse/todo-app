import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="todo_app">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
