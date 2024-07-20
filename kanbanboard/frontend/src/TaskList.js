import React from 'react';
import Task from './Task';
// import './assets/scss/TaskList.scss';

function TaskList({no, tasks = [], addTask}) {  // task 가 없는 경우, default를 빈 배열로 설정 
    console.log("===tasks===");
    console.log(tasks);


    return (
        <div className='Task_List'>
            <ul>
                {
                    tasks.map(tasks => <Task 
                                            key={tasks.no}                    
                                            name={tasks.name}
                                            done={tasks.done}
                                            />
                    )
                }
            </ul>
            <input className='Input_Add_Task' type='text' placeholder='태스크 추가' onKeyDown={(e)=> {
                if(e.key=='Enter'){
                    addTask({
                        name: e.target.value,
                        done: 'N',
                        cardNo: no
                    })
                }
 
            }}></input>
        </div>
    );
}

export default TaskList;