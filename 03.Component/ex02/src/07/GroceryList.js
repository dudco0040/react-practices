import React from 'react';
import GroceryItem from './GroceryItem';
import {Grocery_List} from './assets/scss/GroceryList.scss';

function GroceryList({groceries}) {
    return (
        <ol className={Grocery_List}>
            { 
                groceries.map(e => <GroceryItem
                                     key={e.no} 
                                     name={e.name}
                                     count={e.count} />)
            }
        </ol>
    );
}

export default GroceryList;