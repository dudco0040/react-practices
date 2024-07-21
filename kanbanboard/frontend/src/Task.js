import React, {useState} from 'react';
// import './assets/scss/Task.scss';

function Task({no, name, done: initDone, deleteTask, updateTask}) {
    // task info
    console.log("===Task.js 데이터 전달 확인===");
    console.log(no);
    console.log(name);

    const [done, setDone] = useState(initDone);
    
    console.log("*check: ", done);
    return (
        <li className='_Task'>
            <input type='checkbox' checked={done==='Y'} onChange={async (e)=>{
                console.log("click");
                
                // update done
                const updateDone = done==="Y" ? "N":"Y";
                try{
                    await updateTask({
                        no: no,
                        name: name,
                        done: updateDone
                    });
                    
                    // 요청이 성공하면 상태 업데이트
                    setDone(updateDone);

                } catch(err) {
                    console.error(err);
                }


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
