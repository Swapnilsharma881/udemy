import  generateName from "sillyName"
import superheroes from "superheroes";
//To enable import statment you need to do this "type": "module" 

var sillyName = generateName();

console.log(`My name is ${sillyName}`);

console.log(`I am ${superheroes.random()}`);
