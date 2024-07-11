import React from 'react';
import Tab from './Tab';

function Tabs({tabs}) {
    // const tabList = [];
    // tabs.forEach((tab) => {
    //     console.log({tab});
    //     tabList.push(<Tabs key={tab.no} no={tab.no} name={tab.name} activate={tab.activate} contents={tab.contents} />);
    // });
    
    return (
        <ul>
            {tabs.map(e => <Tab key={e.no} no={e.no} name={e.name} activate={e.activate} />)}
        </ul>
    );
}

export default Tabs;