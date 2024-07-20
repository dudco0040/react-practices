import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
// import './assets/scss/Card.scss';

function Card({no, title, description, status}) {
    console.log("===Card.js 데이터 전달 확인===");
    // card info
    console.log(no);
    console.log(title);
    console.log(description);
    console.log(status);
    // console.log(tasks);

    const[show, setShow] = useState(false);
    const[tasks, setTasks] = useState([]);
       
    
    // load cardlist (fetchCard)
    const fetchTask = async (cardNo) => {
        try {
            const response = await fetch(`/api/${cardNo}`, {
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



    // Task insert
    const addTask = async (task) => {
        console.log("insert: ", task);
    
        try {
            const response = await fetch('/api', {
                method: 'post', // POST 메서드로 요청
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(task)
            });
            
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
    
            const json = await response.json();
    
            if(json.result !== 'success') {
                throw new Error(json.message);
            }
    
            console.log("=== addTask response(JSON)===");
            console.log(response);
            console.log(json.data);
    
            // setTasks(json.data);
    
            setTasks([json.data, ...tasks]);
            fetchTask(no)
    
            } catch(err) {
                console.error(err);
            }
        };

    
    const deleteTask = async (no) => {
        console.log("delete: ", no);

        try{
            const response = await fetch(`api/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            
            // 이메일 목록에서 삭제된 이메일을 제거
            setTasks(tasks.filter(task => task.no !== no));
            

        } catch(err) {
            console.error(err);
        }

    };
 


    return (
        <div className='_Card'>
            <div className='Card_Title Card_Title_Open' onClick={()=> {setShow(!show)}}>{title}</div>
            <div className='Card_Details'>
                {description}
                {show ? <TaskList no={no} tasks={tasks} addTask={addTask} deleteTask={deleteTask} />:null}
                
            </div>
        </div>
    );
}

export default Card;