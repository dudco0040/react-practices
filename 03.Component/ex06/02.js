import fs from 'fs';


console.log("== Violation ===================================");
let order= JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder1 = order;
updateOrder1.receive = "강남구 서초구...";
console.log(order, updateOrder1, order === updateOrder1);


console.log("== Sol =========================================");
order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder2 = Object.assign({}, order, {receive: "강남구 서초구..."});
console.log(updateOrder2, order, updateOrder2 === order);