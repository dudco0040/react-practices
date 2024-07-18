import React, {useState} from 'react';
import TaskList from './TaskList';
// import './assets/scss/Card.scss';

function Card({title, description, status, tasks}) {
    console.log("===Card.js 데이터 전달 확인===");
    console.log(title);
    console.log(description);
    console.log(status);
    console.log(tasks);
    const[show, setShow] = useState(true);

    return (
        <div className='_Card'>
            <div className='Card_Title  Card_Title_Open' onClick={()=> setShow(!show)}>{title}</div>
            <div className='Card_Details'>
                {description}
                {show ? <TaskList tasks={tasks}/>:null}
                
            </div>
        </div>
    );
}

export default Card;