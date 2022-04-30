import React from 'react'

import Todo from './Todo'

function TodoList({ todos, setTodos }) {
    
    return (
        <div className='todo_wrapper'>
            {
                todos.map((todo, index) => (
                    <Todo
                    key={index}
                    todos={todos}
                    setTodos={setTodos} 
                    todo={todo}
                    />
                ))
            }
        </div>
    )
}

export default TodoList