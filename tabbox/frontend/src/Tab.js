import React from 'react';
import {_Tab} from './assets/scss/Tab.scss';

function Tab({no, name, activate}) {
    return (
        <li className={[_Tab, (activate?"active":"")].join(' ')}>
            {name}
        </li>
    );
}

export default Tab;