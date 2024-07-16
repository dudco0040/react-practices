import React from 'react';
import CardList from './CartList';
import './assets/css/App.css';
import data from './assets/json/data.js';

function KanbanBoard() {
    const _toDo = data.filter(d => {
        return d.status === "ToDo";
    });

    const _doing = data.filter(d => {
        return d.status === "Doing";
    });

    const _done = data.filter(d => {
        return d.status === "Done";
    });

    // console.log(_toDo);
    // console.log("----");
    // console.log(_doing);
    // console.log("----");
    // console.log(_done);
    // console.log("----");

    return (
        <div className='Kanban_Board'> 
            <CardList status={_toDo} />
            <CardList status={_doing} />
            <CardList status={_done} />
        </div>
    );
}

export default KanbanBoard;