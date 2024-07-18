import React from 'react';
import Email from './Email';
import {Email_List} from '../assets/scss/Emaillist.scss';

function Emaillist({emails, deleteEmail}) {
    // console.log("----");
    // console.log(emails);
    // console.log("----");
    return (
        <ul className={Email_List}>
            {
                // 선택 연산자
                emails?.map(email => <Email
                    key={email.no}
                    no={email.no}
                    firstName={email.firstName}
                    lastName={email.lastName}
                    email={email.email} deleteEmail={deleteEmail}/>)  

                    
                    }
        </ul>
    );
}

export default Emaillist;