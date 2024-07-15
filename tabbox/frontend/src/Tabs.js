import React from 'react';
import Tab from './Tab';
import {_Tabs} from './assets/scss/Tabs.scss';

function Tabs({selectTab, tabs}) {
    return (
        <ul className={_Tabs}>
            {tabs.map((e, i) => 
                <Tab key={e.no} no={e.no} name={e.name} active={e.active} 
                selectTab={() => selectTab(i)}/>)}
        </ul>
    );
}

export default Tabs;