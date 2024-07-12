import React from 'react';

function Tab({no, name, activate}) {
    return (
        <li className={(activate)?"active":""}>
            {name}
        </li>
    );
}

export default Tab;