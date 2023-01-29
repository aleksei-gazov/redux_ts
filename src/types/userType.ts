export interface UsersState {
    users: any[]
    loading: boolean
    error: null | string
}

export enum UserActionTypes {
    FEATCH_USERS = 'FEATCH_USERS',
    FEATCH_USERS_SUCCESS = 'FEATCH_USERS_SUCCESS',
    FEATCH_USERS_ERROR = 'FEATCH_USERS_ERROR',
}

interface FeatchUserAction {
    type: UserActionTypes.FEATCH_USERS
}

interface FeatchUserSuccessAction {
    type: UserActionTypes.FEATCH_USERS_SUCCESS
    payload: any[]
}

interface FeatchUserErrorAction {
    type: UserActionTypes.FEATCH_USERS_ERROR
    payload: string
}


export type UserACType = FeatchUserAction | FeatchUserSuccessAction | FeatchUserErrorAction