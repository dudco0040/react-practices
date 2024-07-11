import React from 'react';

import TabBox from './TabBox';
import './assets/css/App.css';


function App() {
    const tabs = [
        {no:1, name:'메뉴1', activate:false, contents:'메뉴1의 뷰내용'},
        {no:2, name:'메뉴2', activate:false, contents:'메뉴2의 뷰내용'},
        {no:3, name:'메뉴3', activate:true, contents:'메뉴3의 뷰내용'},
        {no:4, name:'메뉴4', activate:false, contents:'메뉴4의 뷰내용'},
        {no:5, name:'메뉴5', activate:false, contents:'메뉴5의 뷰내용'}
    ];

    return (
        <div id={'App'}>
            <TabBox tabs={tabs}/>
        </div>
    );
}

export {App};