import React from 'react';
// import './assets/scss/Task.scss';

function Task({no, name, done, deleteTask}) {
    // task info
    console.log("===Task.js 데이터 전달 확인===");
    console.log(no);
    console.log(name);
    console.log(done);

    return (
        <li className='_Task'>
            <input type='checkbox' defaultChecked={done} />
                {name}
            <a href='#' className='Task_Remove' onClick={(e)=>{
                
                e.preventDefault();
                deleteTask(no);
            }}></a>
        </li>
    );
}

export default Task;
