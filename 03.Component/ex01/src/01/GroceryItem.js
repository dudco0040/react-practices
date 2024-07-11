import React from 'react';

function GroceryItem({name, count}) {
    console.log({name});

    return (
        <li>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;