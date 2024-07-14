import React from 'react';
import Email from './Email';

function Emaillist(props) {
    const emails = [
        {no:1, name:'둘리', email:'dooly@gmail.com'},
        {no:2, name:'마이콜', email:'michol@gmail.com'},
        {no:3, name:'도우너', email:'douner@gmail.com'},
        {no:4, name:'또치', email:'ddochi@gmail.com'}
    ];

    return (
        <ul className='Emaillist'>
            {emails.map(e=> <Email key={e.no} name={e.name} email={e.email} />)}
        </ul>
    );
}

export default Emaillist;