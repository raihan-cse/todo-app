import React from 'react'
import CompleteIcon from '../assets/icons/check.png'
import RemoveIcon from '../assets/icons/trash.svg'

function Todo({ todos, setTodos, todo }) {
    const deleteItemHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completedHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        )
    }

    return (
        <div className="todo_item">
            <p>{todo.text}</p>
            <button type='button' className={`btn_complete ${todo.completed ? 'completed' : ''}`} onClick={completedHandler}>
                {todo.completed ? <img src={CompleteIcon} alt="icon" /> : '' }
            </button>
            <button type='button' className='btn_remove' onClick={deleteItemHandler}>
                <img src={RemoveIcon} alt="icon" />
            </button>
        </div>
    )
}

export default Todo