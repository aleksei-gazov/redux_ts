import {Dispatch} from 'redux';
import axios from 'axios';
import {TodoACType, TodoActionTypes} from '../../types/todoType';


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoACType>) => {
        try {
            dispatch({type:  TodoActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(()=> {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Error'
            })
        }
    }
}

export const setTodoPage = (page: number): TodoACType => {
    return {type: TodoActionTypes.FETCH_TODO_PAGE, payload: page}
}