import React from 'react';

function Email({no,name,email}) {
    return (
        <li>
            {name}
            <br/>
            {email}
        </li>
    );
}

export default Email;