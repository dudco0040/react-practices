import React from 'react';
import Email from './Email';
import {Email_List} from '../assets/scss/Emaillist.scss';

function Emaillist(props) {
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
        <ul className={Email_List}>
            {emails.map(e=> <Email key={e.no} firstName={e.firstName} lastName={e.lastName} email={e.email} />)}
        </ul>
    );
}

export default Emaillist;