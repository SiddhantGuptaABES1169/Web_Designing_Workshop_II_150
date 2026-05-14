// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]); // Output: 1
// console.log(numbers[2]); // Output: 3
// console.log(typeof numbers); // Output: object
// let mixedArray = [1, "Hello", true, {name : "Alice"},];
// console.log(mixedArray[1]); // Output: Hello
function greet() {
  console.log("Hello, World!");
}
function multiply(a, b) {
  return a * b;
} 
greet(); // Output: Hello, World!
console.log(multiply); // Output: [Function: multiply]
console.log(multiply(5, 3)); // Output: 15
// let divide= function(a, b) {
//   if (b === 0) {
//     return "Cannot divide by zero";
//   } else {
//     return a / b;
//   }  
// };
// console.log(divide(10, 2)); // Output: 5
// let sayHi = () => console.log("Hi!");
// sayHi(); // Output: Hi!
// let square = x => x*x;
// console.log(square(4)); // Output: 16
// const divide = (a,b) => a/b;
// console.log(divide(10,2)); // Output: 5
// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.forEach(fruit => console.log(fruit));
// let animals = ["Dog", "Cat", "Elephant"];
// animals.forEach(animal => console.log(animal));
let students = [
  {name: "Alice", age: 30},
  {name: "Bob", age: 25},
  {name: "Charlie", age: 35}
];

// console.log(people[0].name); // Output: Alice
// console.log(people[1].age); // Output: 25
// console.log(people[2].name); // Output: Charlie 

for(let student of students) {
  console.log(student.name + " is " + student.age + " years old.");   
}
let company = {
  name: "Tech Corp",
  employees: ["Alice", "Bob", "Charlie"],
};
for(let employee of company.employees) {
  console.log(employee + " works at " + company.name);
}
