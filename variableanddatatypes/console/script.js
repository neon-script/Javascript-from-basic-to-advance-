console.log("hello world");
console.log("hi",20, true);
const str="hola";
console.log(str);
// variables---- var, let, const
// let can be redeclared
let name="hello";
console.log(name);
name="lalita";
console.log(name);
// const - value can't be changed
 let number=22;
console.log(number); 
if(true){
    number+= 2;
}
 console.log(number);

 const arr=[1,2,3,4];
arr.push(5);
console.log(arr);
// object declaration - we can modify inside object value but can't change the original object
const person={
    name:'Brad'
}
person.name="lila";
person.email="xyz@gmail.com";
console.log(person);

// declaring multiple values at once
let a, b,c;
const d='raju', f='suleman', j='kritika'
console.log(d);
console.log(f);
console.log(j);

// string
const  firstname="Sara";
// Number 
const age=30;
const temp=99.9;

//Boolean
const hasKids='true';

//Null
const aptnumber=null;

//Undefined
const id=Symbol('id');

//BigInt
const n=9900029383929;

// Refrences Types
const numbers=[1,2,3,4];
const identity={
    name:'Anushka dandekar'
}
function sayHello(){
    console.log('Hello')
}
const output= sayHello;
console.log(output, typeof output);
const var1='veronica'// stored in stack
let newVar =var1;
const obj={ // stored in heap
    SirName:'khan',
    emailId:'zoya@gmail.com'
}
newVar='taara';
 let newSirName =obj;
newSirName.SirName= 'Bharadwaj';

console.log(var1,newVar);
console.log(newSirName,obj);

// Convert string to number

let string="lolo";
 string= parseInt(string);
//string=+string;
string=Number(string);
console.log(string);



