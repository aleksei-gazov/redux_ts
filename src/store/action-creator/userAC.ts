import {UserACType, UserActionTypes} from '../../types/userType';
import {Dispatch} from 'redux';
import axios from 'axios';


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserACType>) => {
        try {
            dispatch({type: UserActionTypes.FEATCH_USERS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            return dispatch({
                type: UserActionTypes.FEATCH_USERS_SUCCESS,
                payload: response.data})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FEATCH_USERS_ERROR,
                payload: 'Error'
            })
        }
    }
}