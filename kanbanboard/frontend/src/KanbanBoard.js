import React, { useState, useEffect } from 'react';
import CardList from './CartList';
import './assets/css/App.css';
// import data from './assets/json/data.js';
// import './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const [card, setCard] = useState(null);

    // load cardlist (fetchCard)
    const fetchCard = async () => {
        try {
            const response = await fetch('/api', {
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

            console.log("===response(JSON)===");
            console.log(response);
            console.log(json.data);

            setCard(json.data);
        } catch(err) {
            console.error(err);
        }
    };

       // Task insert
       const addTask = async (tasks) => {
        console.log("insert: ", tasks);

        try {
            const response = await fetch('/api', {
                method: 'post', // POST 메서드로 요청
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(tasks)
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

            setTasks(json.data);

            setTasks([json.data, ...tasks]);

        } catch(err) {
            console.error(err);
        }
    };

    


    useEffect(() =>{
        fetchCard();
    },[]);
    

    // const _toDo = card.filter(d => {
    //     return d.status === "ToDo";
    // });
    
    // console.log(_toDo);


    return (
        <div className='Kanban_Board'> 
        {card && (
            <>
                <CardList status={card.filter(d => d.status === "ToDo")} Title={"ToDo"} addTask={addTask} />
                <CardList status={card.filter(d => d.status === "Doing")}  Title={"Doing"} />
                <CardList status={card.filter(d => d.status === "Done")}  Title={"Done"} />
            </>
            )}
        </div>
    );
}

export default KanbanBoard;