import React from 'react'

import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos }) {
    
    return (
        <div className='todo_wrapper'>
            {
                filteredTodos.map((todo, index) => (
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