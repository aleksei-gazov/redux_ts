import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {fetchUsers} from '../store/action-creator/userAC';
import {useActions} from '../hooks/useActions';

const UserList: React.FC = () => {
    const {users, loading, error} =  useTypedSelector(state=> state.user)

    const {fetchUsers} = useActions()

    useEffect(()=> {
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(u=> {
                return (
                    <div>{u.name}</div>
                    )
            })}
        </div>
    );
};

export default UserList