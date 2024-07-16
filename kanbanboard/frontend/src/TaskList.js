import React from 'react';
import Task from './Task';

function TaskList({tasks}) {
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
            <input className='Input_Add_Task' type='text' placeholder='태스크 추가'></input>
        </div>
    );
}

export default TaskList;