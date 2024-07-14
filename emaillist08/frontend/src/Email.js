import React from 'react';
import {_Email} from '../assets/scss/Email.scss';

function Email({firstName, lastName, email}) {
    return (
        <li className={_Email}>
            {firstName}{lastName}
            <br/>
            {email}
        </li>
    );
}

export default Email;