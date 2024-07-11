import React from 'react';

function Clock02(props) {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    return (
        <div>
           {('0'+hour).slice(-2)}
           {':'}
           {('0'+min).slice(-2)}
           {':'}
           {('0'+sec).slice(-2)} 
        </div>
    );
}

export default Clock02;