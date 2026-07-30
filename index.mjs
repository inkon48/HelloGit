import { add, subtract, multiply, division, sayHello } from './calc.mjs';
import { isEven } from './calc.mjs';

console.log(add(1, 2));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(division(2, 0));
console.log(division(4, 2));
console.log(sayHello("Inkon"));

let number = 22;
if (isEven(number)) {
    console.log("even");
} else {
    console.log("odd");
}

