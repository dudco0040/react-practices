import React from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import '../assets/scss/App.scss';

function App(props) {
    const emails = [
        {
            "no": 1,
            "firstName": "둘",
            "lastName": "리",
            "email": "dooly@gmail.com"
        },
        {
            "no": 2,
            "firstName": "마",
            "lastName": "이콜",
            "email": "michol@gmail.com"
        },
        {
            "no": 3,
            "firstName": "도",
            "lastName": "우너",
            "email": "douner@gmail.com"
        },
        {
            "no": 4,
            "firstName": "또",
            "lastName": "치",
            "email": "ddochi@gmail.com"
        }
    ];


    return (
        <div id='App'>
            <RegisterForm />
            <SearchBar />
            <Emaillist />
        </div>
    );
}

export default App;