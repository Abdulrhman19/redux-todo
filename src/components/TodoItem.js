import React from 'react'
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

import './../css/todoItem.css'
import { identifier } from '@babel/types'


const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
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