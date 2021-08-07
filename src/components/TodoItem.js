import React from 'react'
import { Checkbox } from '@material-ui/core'

import './../css/todoItem.css'


const TodoItem = ({ name, done, id }) => {
    const handleCheck = () => {

    }
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />            {/* name */}
            <p className={done ? "todoItem--done" : undefined}>{name}</p>
        </div>
    )
}

export default TodoItem