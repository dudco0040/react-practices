import React from 'react';

function Email({no,name,email}) {
    return (
        <li className={email}>
            {name}
            <br/>
            {email}
        </li>
    );
}

export default Email;