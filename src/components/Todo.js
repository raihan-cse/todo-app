import React from 'react'
import CompleteIcon from '../assets/icons/check.png'
import RemoveIcon from '../assets/icons/trash.svg'

function Todo({todos, setTodos, todo}) {
    const deleteItemHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    return (
        <div className="todo_item">
            <p>{todo.text}</p>
            <button type='button' className='btn_status'>
                <img src={CompleteIcon} alt="icon" />
            </button>
            <button type='button' className='btn_remove' onClick={deleteItemHandler}>
                <img src={RemoveIcon} alt="icon" />
            </button>
        </div>
    )
}

export default Todo