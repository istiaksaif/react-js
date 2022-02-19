import { useState } from "react";
import React from 'react';

const AddTask = ({onAdd}) => {
    const [text,settext] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setreminder] = useState(false)
    
    const onSubmit =(e) => {
        e.preventDefault()

        if(!text) {
            alert('please add a task')
            return
        }

        onAdd({ text, day, reminder })

        settext('')
        setDay('')
        setreminder(false)
    }

  return <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
          <label>Task</label>
          <input type='text' placeholder='Add task'
          value={text} onChange={(e) =>settext(e.target.value)}/>
      </div>
      <div className='form-control'>
          <label>Day & Time</label>
          <input type='text' placeholder='Add day & time'
          value={day} onChange={(e) =>setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input type='checkbox' checked={reminder}
          value={reminder} onChange={(e) =>setreminder(e.currentTarget.checked)}/>
      </div>
      <input type='submit' value="Task Save" className='btn btn-block'/>
  </form>
};

export default AddTask;

