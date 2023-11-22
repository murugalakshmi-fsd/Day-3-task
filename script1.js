let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
let a={name:"person1",age:5};
let b={name:"person1",age:5};
console.log(JSON.stringify(a)===JSON.stringify(b));