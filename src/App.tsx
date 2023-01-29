import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';
import TodoList from './component/TodoList';

function App() {
    return (
        <div className="App">
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
}

export default App;
