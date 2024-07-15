import React from 'react';
import {_Tab} from './assets/scss/Tab.scss';

function Tab({no, name, active, selectTab}) {
    return (
        <li className={[_Tab, (active ? "active":"")].join(' ')}
        onClick={selectTab}>
            {name}
        </li>
    );
}

export default Tab;