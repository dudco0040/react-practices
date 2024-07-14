import React from 'react';
import Tab from './Tab';
import {_Tabs} from './assets/scss/Tabs.scss';

function Tabs({tabs}) {
    return (
        <ul className={_Tabs}>
            {tabs.map(e => <Tab key={e.no} no={e.no} name={e.name} activate={e.activate} />)}
        </ul>
    );
}

export default Tabs;