import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //get items in local storage
  const todoStoreItems = JSON.parse(localStorage.getItem("todos") || "[]");

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(todoStoreItems);

  //status wise filter
  const [status, setStaus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(todoStoreItems);

  useEffect(() => {
    filterHnadler();
    //set items in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);

  const filterHnadler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="todo_app">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStaus={setStaus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
