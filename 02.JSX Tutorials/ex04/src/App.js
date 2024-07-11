import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    // return (
    //     <div id={'App'} className={'Header'}>
    //         <Header />
    //         <Contents />
    //     </div>
    // );
    return React.createElement(
        'div', 
        {id: 'App'}, 
        React.createElement(Header, null), 
        React.createElement(Contents, null));
}

export {App};