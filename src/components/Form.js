import React from 'react'
import PlusIcon from '../assets/icons/plus.svg'

function Form({ inputText, setInputText }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitItemHandler = (e) => {
        e.preventDefault();
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
                    <select className='select'>
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