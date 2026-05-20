// let myObj={
//     name:"Sujal",
//     email:"sujal@example.com",
// };
// let myObj2={};
// myObj2.email="ss@test.com";
// myObj2.email=myObj.email;
// console.log(myObj.email);
// console.log(myObj2.email);
let name="Sujal Shree";
let age=21;
console.log(`My name is ${name} and I am ${age} years old.`);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('e'));
console.log(name.substring(0,4));
const gameName=new String(" Valorant ");
console.log(gameName.slice(0,3));
console.log(gameName.trim());
const url="https://www.example.com/path/to/resource?query=string#fragment";
console.log(url.replace("https://",""));
console.log(url.includes("example"));
console.log(url.split("/"));
