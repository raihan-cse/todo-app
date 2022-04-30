import React from 'react'

import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos }) {

    return (
        <div className='todo_wrapper'>
            {filteredTodos.length !== 0
                ?
                filteredTodos.map((todo, index) => (
                    <Todo
                        key={index}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo} />
                ))
                :
                <p className='empty_note'>Task not added yet.</p>
            }
        </div>
    )
}

export default TodoList