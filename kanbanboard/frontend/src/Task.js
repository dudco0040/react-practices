import React from 'react';
// import './assets/scss/Task.scss';

function Task({name, done}) {
    // console.log(name);
    // console.log(done);

    return (
        <li className='_Task'>
            <input type='checkbox' defaultChecked={done} />
                {name}
            <a href='#' className='Task_Remove'></a>
        </li>
    );
}

export default Task;
