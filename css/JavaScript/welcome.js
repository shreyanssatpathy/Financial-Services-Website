console.log('hello world');

let age=56;
console.log(age);

let name='Shreyans'
console.log(name);

console.log(`My name is ${name} and I am ${age} years old`)

const s="hello World";
console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(''));

// arrays 

const fruits=['apples', 'oranges',5.3, false]
console.log(fruits);
console.log(fruits[1]);
    
    // add to array end
fruits.push('mangoes');

    // add to array beg
fruits.unshift('peach');

// remove last element
fruits.pop(); 

console.log(fruits.indexOf('oranges'));