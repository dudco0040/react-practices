import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
// import './assets/scss/Card.scss';

function Card({no, title, description, status, addTask}) {
    console.log("===Card.js 데이터 전달 확인===");
    console.log(no);
    console.log(title);
    console.log(description);
    console.log(status);
    // console.log(tasks);

    const[show, setShow] = useState(false);
    const[tasks, setTasks] = useState([]);

    
    // load cardlist (fetchCard)
    const fetchTask = async (no) => {
        try {
            const response = await fetch(`/api/${no}`, {
                method: 'get', // GET 메서드로 요청
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });
            
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            console.log("=== check ===");
            console.log(response);
            console.log(json.data);

            setTasks(json.data);
        } catch(err) {
            console.error(err);
        }
    };

    useEffect(() =>{
        fetchTask(no);
    },[]);


    return (
        <div className='_Card'>
            <div className='Card_Title Card_Title_Open' onClick={()=> {setShow(!show)}}>{title}</div>
            <div className='Card_Details'>
                {description}
                {show ? <TaskList no={no} tasks={tasks} addTask={addTask}/>:null}
                
            </div>
        </div>
    );
}

export default Card;