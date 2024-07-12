import React from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import '../assets/css/App.css';

function App(props) {
    return (
        <div id='App'>
            <RegisterForm />
            <SearchBar />
            <Emaillist />
        </div>
    );
}

export default App;