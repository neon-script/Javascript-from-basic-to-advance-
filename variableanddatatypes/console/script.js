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
 string= parseInt(string);// it tries to seperate integer part from string but the whole part is non-numeric so it returns NaN
//string=+string;
string=Number(string); //it also return NAN
console.log(string);// NAN


//operators
let x=2;
x+=2;
x*=3;
x%=3;
x-=3;
x='Hello' + ' '+'World';
x=2**3;
x--;
x++;
x=2=='2';// loosely equity
x=2==='2';// strict equity
x=2!=2;//Not Equal to
x=2!==2;
console.log(x);
// type coercion -- process of automatically  converting a value from one data type to another

x=5+'5';
console.log(x); // 55
x=5+Number('5') ;
console.log(x); //10
x= 5 * '5';
console.log(x);//25
x= 5+ null
console.log(x);
// Explicit type coercion or type casting
x= Number(null);
console.log(x);//0
x=Number(true);
console.log(x);//1
x=Number(false);
console.log(x);//0
x= Number(undefined);
console.log(x);//NaN

//string
let Name =`My name is john Doe`;
console.log(Name);
Name='Johny Liver';
console.log(`My Name is ${Name}`);

let s= new String('Hello World');
//s=typeof s;
console.log(s);
//s= s.length;
console.log(s);
let store=s[1];
console.log(store);
console.log(store.__proto__);
console.log(s.charAt(3));
console.log(s.indexOf('d'));
console.log(s.substring(2,6));
console.log(s.substring(5));
s="hello world";
console.log(s.slice(-11,10));// 11-11=0// h// remember slice will print upto second last i.e on 10 you have d so it will print upto l
console.log(s.slice(-10,-6));// 11-10=1=e, 11-6=5=>space
console.log(s.replace('Hello','joy'));
console.log(s.valueOf());
console.log(s.split());// convert into string of array



