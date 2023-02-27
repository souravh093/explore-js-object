// create object using object literals 1 recommendation
const player = {};
player.name = 'Small';
player.specialty = 'batsman'

player.bat = () => {
    console.log("something to do");
}
console.log(player);

const students = {
    name: 'Pandey',
    job: 'Student',
    ball: () => {
        console.log("ball koro tomi");
    },
    salary: 100000
}


// object constructor 2
// const person = new Object();
// console.log(person);
const artel = Object.create(students)
console.log(artel.name);

// // object create method 3
// const item = Object.create(null);
// console.log(item);

// 4. class recommendation
class Person {
    name = "Abul";
    address = 'Barishal';
    age;
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Person(200);
console.log(person1);

// using function create object 
const Car =  (model, price) => {
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 32);
console.log(tesla);