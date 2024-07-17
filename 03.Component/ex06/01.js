import fs from 'fs';

console.log("== Violation ===================================");
let order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));
const updateOrderProducte1 = order.products;

updateOrderProducte1.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});
console.log(order.products, updateOrderProducte1, order.products===updateOrderProducte1);




console.log("== Sol1 ========================================");
order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrderProducte2 = order.products.concat({  //updateOrderProducte2 -> 새로운 객체
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});

console.log(order.products, updateOrderProducte2, order.products===updateOrderProducte2);



console.log("== Sol2 ========================================");
order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrderProducte3 = [...order.products, {
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
}];


console.log(order.products, updateOrderProducte3, order.products===updateOrderProducte3);




