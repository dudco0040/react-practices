import React, { createElement } from 'react';

const Header = function(props) {
    return (
        <div>
            <h1>Ex03</h1>
        </div>
    );
};


createElement('div', null, Header())
export default Header;