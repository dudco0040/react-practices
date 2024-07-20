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
       
    
    // Task: select 
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



    // Task: insert
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
    
            setTasks([...tasks, json.data]);
            fetchTask(no)
    
            } catch(err) {
                console.error(err);
            }
        };

    
    // Task: delete
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

            
            setTasks(tasks.filter(task => task.no !== no));
            

        } catch(err) {
            console.error(err);
        }

    };


    // Task: update
    const updateTask = async (no) => {
        console.log("update: ", no);

        try{
            const response = await fetch(`api/${no}`, {
                method: 'put',
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

            // fetchTask(no)
            return true;

        } catch(err) {
            console.error(err);

            return false;
        }

    };

 


    return (
        <div className='_Card'>
            <div className='Card_Title Card_Title_Open' onClick={()=> {setShow(!show)}}>{title}</div>
            <div className='Card_Details'>
                {description}
                {show ? <TaskList no={no} tasks={tasks} addTask={addTask} deleteTask={deleteTask} updateTask={updateTask} />:null}
                
            </div>
        </div>
    );
}

export default Card;