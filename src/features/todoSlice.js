import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    console.log(action);
                    item.done = !item.done
                }
            })
        },
        removeTodo: (state, action) => {
            state.todoList.map(item => {
                if(action.payload === item.id) {
                    const index = state.todoList.indexOf(item)
                    state.todoList.splice(index, 1)
                }
            })
        }
    }
});

export const {
    saveTodo, setCheck, removeTodo
} = todoSlice.actions

export const selectTodoList = state => (
    state.todos.todoList
)

export default todoSlice.reducer