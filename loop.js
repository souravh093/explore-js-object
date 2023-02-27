const numbers = [12, 52, 92, 99, 72];

// for (const number of numbers) {
//     console.log(number);
// }

const bottle = {
    color: 'yellow',
    price: 50,
    isClean: true,
    capacity: 1
}

// for of Can't be use with object

// first option use loop in object in using Object.keys(objectName)
// 3 ways to read object properties
/*
    1. bottle.color
    2. bottle['color']
    3. bottle[key]
*/
// const keys = Object.keys(bottle);
// for (const key of keys) {
//     console.log(key, bottle[key]);
// }


// for in loop 
for (const key in bottle) {
    console.log(bottle[key]);
}


// advanced
const pair = Object.entries(bottle);
for(const [key, value] of pair) {
    console.log(key, value);
}
// console.log(keys);
