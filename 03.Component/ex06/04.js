import fs from 'fs';
import update from 'react-addons-update';

console.log("== Sol =========================================");
const order = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

const updateOrder = update(order, {
    // property 변경 -> 객체 변경
    recive: {
        $set: "강남구 논현동..."
    },
    // nest 객체 property 변경 - deep
    payment: {
        method:{
            $set: "mobile"
        }
    },
    // 배열 변경 
    products: {
        // 배열 요소 객체 property 변경
        0:{
            amount:{
                $set:200
            }
        },
        // 배열 자체를 변경 - 배열 요소 추가
        $push: [{
            no: 'c002-003',
            name: '블루양말',
            price: 2000,
            amount: 1
        }] // 한 개를 추가하더라도 []에 담아서 넣어줘야한다. 
    }  
})

console.log(updateOrder, order);