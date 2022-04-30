import React from 'react'
import CompleteIcon from '../assets/icons/check.png'
import RemoveIcon from '../assets/icons/trash.svg'

function TodoList({ todos, setTodos }) {
    return (
        <div className='todo_wrapper'>
            {
                todos.map((todo, index) => (
                    <div className="todo_item" key={index}>
                        <p>{todo.text}</p>
                        <button type='button' className='btn_status'>
                            <img src={CompleteIcon} alt="icon" />
                        </button>
                        <button type='button' className='btn_remove'>
                            <img src={RemoveIcon} alt="icon" />
                        </button>
                    </div>
                ))
            }
            <div className="todo_item">
                <p>This is task number one</p>
                <button type='button' className='btn_status'>
                    <img src={CompleteIcon} alt="icon" />
                </button>
                <button type='button' className='btn_remove'>
                    <img src={RemoveIcon} alt="icon" />
                </button>
            </div>
            <div className="todo_item">
                <p>This is task number one</p>
                <button type='button' className='btn_status'>
                    {/* <img src={CompleteIcon} alt="icon" /> */}
                </button>
                <button type='button' className='btn_remove'>
                    <img src={RemoveIcon} alt="icon" />
                </button>
            </div>
        </div>
    )
}

export default TodoList