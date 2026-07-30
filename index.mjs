import { add, subtract, multiply, division, sayHello, welcome } from './calc.mjs';
import { isEven } from './calc.mjs';

console.log(add(1, 2));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(division(2, 0));
console.log(division(4, 2));
console.log(sayHello("Inkon"));
console.log(welcome("Inkon"));

let number = 20;
if (isEven(number)) {
    console.log("even");
} else {
    console.log("odd");
}



