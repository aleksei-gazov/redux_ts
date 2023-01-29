import * as UserActionCreator from './userAC'
import * as TodoActionCreator from './todoAC'

export default {
    ...TodoActionCreator,
    ...UserActionCreator
}