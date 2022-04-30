import React from 'react'
import PlusIcon from '../assets/icons/plus.svg'

function Form({ inputText, setInputText, todos, setTodos, setStaus }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitItemHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Math.random() * 100,
                text: inputText,
                completed: false
            }
        ]);
        setInputText('');
    }

    //status wise filter
    const statusHandler = (e) => {
        setStaus(e.target.value)
    }


    return (
        <div className='form_wrapper'>
            <form>
                <div className="input_group">
                    <input
                        type="text"
                        placeholder='Write list here...'
                        className='input_box'
                        value={inputText}
                        onChange={inputTextHandler}
                    />
                    <button type='submit' className='btn_submit' onClick={submitItemHandler}>
                        <img src={PlusIcon} alt="icon" />
                    </button>
                </div>
                <div className="select_box">
                    <div className="label_box">
                        <span>filter</span>
                    </div>
                    <select name="todos"  className='select' onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form