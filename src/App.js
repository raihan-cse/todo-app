import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo_app">
     <header>
       <h1 className="title">todo</h1>
     </header>
     <Form />
     <TodoList />
    </div>
  );
}

export default App;
