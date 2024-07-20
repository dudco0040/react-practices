import React, {useState} from 'react';
// import './assets/scss/Task.scss';

function Task({no, name, done: initDone, deleteTask, updateTask}) {
    // task info
    console.log("===Task.js 데이터 전달 확인===");
    console.log(no);
    console.log(name);

    const [done, setDone] = useState(initDone);
    
    console.log(done);
    return (
        <li className='_Task'>
            <input type='checkbox' checked={done} onChange={async (e)=>{
                console.log("click");
                
                await updateTask(no);
                setDone(!done);
            }}/>
                {name}
            <a href='#' className='Task_Remove' onClick={(e)=>{
                
                e.preventDefault();
                deleteTask(no);
            }}></a>
        </li>
    );
}

export default Task;
