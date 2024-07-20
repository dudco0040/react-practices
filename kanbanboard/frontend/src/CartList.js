import React from 'react';
import Card from './Card';
// import './assets/scss/CardList.scss';

function CartList({status, Title, addTask}) {
    console.log("===Cardlist.js 데이터 전달 확인===");
    console.log(status);

    return (
        <div className='Card_List'>
            <h1>{Title}</h1>
            {
                status.map(status => 
                    <Card 
                        key={status.no}
                        no={status.no}
                        title={status.title}
                        description={status.description}
                        status={status.status}
                        // tasks={status.tasks}

                        addTask={addTask}
                    />
                )

            }
            

        </div>
    );
}

export default CartList;