import React, {useRef} from 'react';
import Task from './Task';
// import './assets/scss/TaskList.scss';

function TaskList({no, tasks=[], addTask, deleteTask, updateTask}) {  // task 가 없는 경우, default를 빈 배열로 설정 
    console.log("===TaskList.js 데이터 전달 확인===");
    console.log(tasks);
    
    const reinput = useRef(null);

    return (
        <div className='Task_List'>
            <ul>
                {
                    tasks.map(task => <Task 
                                            key={task.no}
                                            no = {task.no}                    
                                            name={task.name}
                                            done={task.done}

                                            deleteTask={deleteTask}
                                            updateTask={updateTask}
                                            />
                    )
                }
            </ul>
            <input ref={reinput}
                className='Input_Add_Task' type='text' placeholder='태스크 추가' onKeyDown={(e)=> {
                if(e.key==='Enter'){
                    addTask({
                        name: e.target.value,
                        done: 'N',
                        cardNo: no
                    });
                    reinput.current.value=null
                }
 
            }}></input>
        </div>
    );
}

export default TaskList;