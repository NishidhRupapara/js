var a = "temp";
var _123 = "hello";
var $123 = "hi";
b = 24;
let temp = "hi";
const temp_const = "hello world";

// declaraation and initialization
var d; // declaration
d = "nishidh"; // initialization
var e = "nishidh"; // declaration and initialization in one time

//var add value into window
//var is function scoped
//var can be redeclared and reassigned
//let is block scoped
//let can be reassigned but cannot be redeclared
//const is block scoped
//const cannot be redeclared and reassigned

// redeclaration and reassignment
// var name = "nishidh"; //reassignment
// let name = "nishidh"; //redeclaration

// let temp=24;
// var temp=25; //you can't redeclare let variabe

// const temp_b = "name";
// temp_b = "USERNAME" //const cannot be redeclared and reassigned

// scope (global, Block, functional)
var e = 23; // global scope
console.log("Global Scope " + e);
{
  var e = 25; // block scope
  console.log("block Scope " + e);
}

function abc() {
  var e = 30; // functional scope
  console.log("functional scope " + e);
}
abc();
console.log(e);


// scope (global, Block, functional)
let f = 23; // global scope
console.log("Global Scope let variable " + f);
{
  let f = 25; // block scope
  console.log("block Scope let variable " + f);
}

function abc() {
  let f = 30; // functional scope
  console.log("functional scope let variable " + f);
}
abc();
console.log(f);


// Temporal Dead Zone (TDZ)
console.log(temp_d);

var temp_d = 24;
// console.log(g);
log(j) ;
let j = 12

// hoisting imapact
// hoisting --> when your create a variable into js that break into two part first is declare parth that go to up and there initialization part that go down
var temp_d = 12;
 
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go down (means stuck into line 66)
// if you use console.log before initialization that give you
// undefined;
 
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give you error;
// Hoisting Impact on var, let, const
/*
var --> hoist -> undefined
let --> hoist --> error
const --> hoist --> error
*/