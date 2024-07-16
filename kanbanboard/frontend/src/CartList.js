import React from 'react';
import Card from './Card';

function CartList({status}) {
    // console.log(status[0].status);



    return (
        <div className='Card_List'>
            <h1>{status[0].status}</h1>
            {
                status.map(status => 
                    <Card 
                        key={status.no}
                        title={status.title}
                        description={status.description}
                        status={status.status}
                        tasks={status.tasks}
                    />
                )

            }
            

            

        </div>
    );
}

export default CartList;