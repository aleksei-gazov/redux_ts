import {UserACType, UserActionTypes, UsersState} from '../../types/userType';



const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}


export const userReducer = (state = initialState, action: UserACType): UsersState => {
    switch (action.type) {
        case UserActionTypes.FEATCH_USERS: {
            return {loading: true, error: null, users: []}
        }
        case UserActionTypes.FEATCH_USERS_SUCCESS: {
            return {loading: false, error: null, users: action.payload}
        }
        case UserActionTypes.FEATCH_USERS_ERROR: {
            return {loading: false, error: action.payload, users: []}
        }
        default :
            return state
    }
}