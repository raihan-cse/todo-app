import React from 'react'
import PlusIcon from '../assets/icons/plus.svg'

function Form() {
  return (
    <div className='form_wrapper'>
    <form>
        <div className="input_group">
            <input 
            type="text" 
            placeholder='Write list here...'
            className='input_box' 
            />
            <button type='submit' className='btn_submit'>
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