import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'
import './../css/deleteButton.css'

const DeleteButton = ({id}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeTodo(id))
    }

    return (
        <div className="delete-btn">
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default DeleteButton