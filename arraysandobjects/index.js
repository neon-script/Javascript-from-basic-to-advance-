// Array literal
let arr=['apple','mango','banana','orange'];
console.log(arr);
const mixed=[12,33,'true',null]
console.log(mixed);
const fruits= new Array('apple','orange','grapes');
console.log(fruits);
let fruit=fruits[0]+fruits[1];
console.log(fruit);
console.log(fruits.length);
fruits[3]='papaya';
console.log(fruits);
fruits[fruits.length]='banana';
console.log(fruits)
// array methods 
const  method=[12,24,36,48,56,64,72,84]
method.push(21);
method.push(34);

console.log(method)
console.log(method.pop());
console.log(method.reverse());
console.log(method.slice(3,7));
console.log(method);
console.log(method.splice(2,5))
console.log(method.slice(2,4).reverse().toString());
console.log(Array.isArray(method));
arr.push(method);
console.log(arr);//[apple,mango,banana,orange,fruits[----]]
console.log(arr[4][1])//84
const ArrayCombo=[arr,method];
console.log(ArrayCombo);
console.log(fruits.concat(method));
console.log([...fruits,...method]);
let arr1=[1,22,33,[4,5,6],7,[8,9]];
console.log(arr1);
console.log(arr1.flat());
console.log(Array.from('12345'));
const a=1;
const b=2;
const c=3;
console.log(Array.of(a,b,c));
let arr2=[1,2,3,4,5];
   arr2.unshift(0);
    arr2.push(6);
   arr2.reverse();
console.log(arr2);
let arr3=[1,2,3,4,5];
arr3.pop();
let arr4=[5,6,7,8,9,10];
let arr5=arr3.concat(arr4);

console.log(arr5);
//object literal
const data={
   name:'John Doe',
   age:23,
   isAdmin:true,
   address:{
      street:'123 Main street',
      city:'Boston',
      state:'MA'
   },
   hobbies:['Badminton','Cricket'],
};
console.log(data.hobbies);
console.log(data['name']);
console.log(data.address.state);
console.log(data.name);
console.log(data.hasChildren);
data.name='jane sharma';
console.log(data.name);
data.greet= function (){
   console.log(`Hello this is ${data.name}`);
};
data.greet();
const data2={
   name:'Jacquiline',
   age:35
}
console.log(data2['name']);
// object constructor
const todo=new Object();
todo.id=1;
todo.name='RajmaChawal'
console.log(todo);
const History={
   address:{
      coords:{
         lat:34.563,
         lng:-32.211,
      },
   },
}
console.log(History.address);
console.log(History.address.coords);

const obj1= {a:1, b:2};
const obj2={c:3,d:4};
const obj3={...obj1,...obj2};
console.log(obj3);
const obj4= Object.assign({},obj2, obj3);
const todos=[
{id:1,name:'Buy Milk'},
{id:2, name:'Pickup kids from school'},
{id:3,name:'everything is trash'},
];
console.log(todos[0].name);
console.log(Object.keys(todos));
console.log(Object.keys(todos).length);
console.log(Object.values(todos));
console.log(Object.entries(todos));
console.log(todos.hasOwnProperty('age'));
const firstName='Radha';
const lastName='Bhardwaj';
const age=20;
const people={
   firstName,
   lastName,
   age
}
console.log(people.firstName);

const DataCollect={
id:1,
data:{
   name:'Rasha',
   age:20
},
subject:'Maths'
};
console.log(DataCollect)
console.log(DataCollect.subject)
const {
   id:DataID,
   title,
     data:{name:Newname},
}=DataCollect;

console.log(DataCollect.id);
console.log(DataCollect.data.name);
const numbers=[22,44,56,78,90];
const[first,second,...rest]=numbers;
console.log(first,second,rest);
console.log(numbers);

const post={
   id:1,
   name:'Manika jain',
   likes:3,
   body:'This is the body'
}
const str=JSON.stringify(post);
console.log(str);
console.log(str.id);
const obj= JSON.parse(str);
 const posts=[
   {
   id:1,
   name:'jira',
   age:22,
   },
   {
      id:2,
      name:'alibaba',
      age:36,
   }
 ];
 JSON.stringify(posts);
 console.log(posts);
 const library=[
   {
      id:1,
      author:'Abhishek veeramulla',
      status:{
          own:true,
          reading:false,
          read:false,
      },
   },
   {
       id:2,
      author:'Anahita sharma',
      status:{
          own:true,
          reading:false,
          read:false,
   },
 },
 {
 id:3,
      author:'Akriti varshney',
      status:{
          own:true,
          reading:false,
          read:false,
 },
},
{
id:4,
 author:'Akansha sharma',
      status:{
          own:true,
          reading:false,
          read:false,
},
},
 ];
 console.log(library[0].status.read);
 const{author:Manara}=library[0];
 console.log(Manara);
 console.log(library);
  function sayHello(){
   console.log('Hello World');
  }
  sayHello();
  function add(num1, num2){
      console.log(num1+num2);
  }
  add(2,4);
  function subtract(num1,num2 ){
         console.log(num1-num2);
  }
  const result=subtract(4,2);
  console.log(result,subtract(6,3));
  function registerUser(user="bot"){
       return user;
  }
  console.log(registerUser());
  function sum(...numbers){
     let total=0;
     for(let i of numbers){
      total+=i;
     }
     return total;
  }
  console.log(sum(1,2,3,4,5,6,100));

  function loginUser(user){
    return `The user ${user.name} with ${user.id}`;
  }

  const user={
   id:1,
    name:'Mahira'

  };
  console.log(user);
  console.log(user.id);
  function getRandom(){
   const randomIndex=Math.floor(Math.random()*arr.length);
   const item=arr[randomIndex];
   console.log(item);
  }

getRandom(1,22,33,7,33,23,12,89);


//nested function
function fi(){
   x=10;
   function sec(){
      y=20;
      console.log(x+y);
   }
   sec();
}
fi();
  function addDollarSign(value){
   return '$' + value;
  }
  console.log(addDollarSign(100));

  const addPlusSign=function(value){
   return '+' +  value;
  };
  console.log(addPlusSign(200));

  const xtreme=100;
  if(true){
   console.log(xtreme);
   const y=200;
   console.log(xtreme+y);
  }
  console.log(y);
  function run(){
   var j=100;
   
  }
  //console.log(j);// refrence error
  run();

  function Userless(z){
      console.log(z);
      function UserMore(){
         let p=22;
         console.log(p+z);
      }
      UserMore();
   }
   Userless(100);
function add(a,b){
   return a+b;
}
console.log(add(3,4));
const adder=(ax,bx)=>{
   return ax+bx;
}
adder(3,5);

const double=(a)=>a*2;
const createObj=()=>({
   name:'Brad'
});
const num=[1,2,3,4,5,6];
num.forEach(function(n){
console.log(n);
})
num.forEach((n)=>console.log(n));// arrow function

(function(){
   const user='John';
   console.log(user);
const hello=()=>console.log('hello form IEFLE');
hello();
})();
(function(name){
   console.log('Hello'+ name);
})('Shawn');
(function hello(){
   console.log('hello');
})();
/*
Create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
For bonus points, write it as a one line arrow function

Expected Result:

console.log(getCelsius(32)); // 0
You can make the output look prettier by putting it into a string. You can even add \xB0 (degrees) and a C in front of the celsius temperature.
console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C
*/
const getCelsius=(temp)=>{
   const celsius=(temp-32)*5/9;
   return celsius;
};
  console.log(`The temperature is ${getCelsius(32)}°C`);

  const getFahren=(temp)=>{
     const fahren=(temp*1.8)+32;
     return fahren;
  }
  console.log(`The temperature is ${getFahren(0)}°F`);
/*
Instructions:

Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

Expected Result:

console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }*/
const minMax=(num)=>{
   const store=Math.min(...num);
   const box=Math.max(...num);
  return [store, box];
}
const res=minMax([1,2,3,4,5]);
console.log(res);

const date= new Date(2025,11,28,20,0,0);
console.log(date);
const month=date.getMonth();
const hours= date.getMinutes();
console.log(month,hours);
switch(month){
case 1:
   console.log('it is january');
   break;
   case 2:
   console.log('it is february');
      break;
      case 3:
    console.log('It is March');
         break;
         default:
      console.log('It is not jan , feb, March');
}
const currDate= new Date();
const hour=date.getHours();
switch(true){
   case hour<12:
      console.log('Good Morning');
      break;
      case hour <18:
         console.log('Good Afternoon');
      break;
      default:
         console.log('Good night');
}
function Calculator(num1, num2,op){
   let result;
switch(op){
   case '+':
      result= num1+num2;
      break;
   case '-':
      result=num1-num2;
      break;
   case '*':
   result= num1*num2;
   break;
   case '/':
      result=num1/num2;
      break;
   default:
      result ='Invalid operator';
}
console.log(result);
return result;
}
Calculator(3,4,'+');

const z= function(){};
if(z){
   console.log('this is truthy');
}
else{
   console.log('this is falsy');
}
console.log(Boolean(x));
const userData={
 name1: 'Brad' ,
}
if(userData){
   console.log('this is data');
}else{
   console.log('No data');
}
console.log(10<20&&30>15&&40<30);
console.log(30>12||30<15);
 let xc=10??20;
console.log(xc);
let yz= null??20;
console.log(yz);
let zx=''??30;
console.log(zx);
let agge=18;
agge>20? console.log('You can vote'): console.log('You cannot vote')
const auth=true;

const redirect=auth?(alert('welcome to the dashboard'),'/dashboard'): (alert('Access denied'),'/login');
console.log(redirect);

const names=['Brad', 'Sam','Sara','John', 'Tim'];
for(let i=0;i<names.length;i++){
   if(names[i]=='John'){
      console.log(names[i]+'is the best');
   }else{
      console.log(names[i]);
   }
}
for(let ij=0;ij<=10;ij++){
   if(ij === 5){
      console.log('Breaking');
       break;
}
console.log(ij);
   }

   for(let jk=0;jk<=10;jk++){
      if(jk===5){
         console.log('skipping 5...');
         continue;
      }
      console.log(jk);
   }
  for(let k=1;k<=10;k++){
     if(k==6) break;
     console.log(k);
  }
  for(let m=1;m<=7;m++){
   if(m==6)continue;
   console.log(m);
  }
  let i=1;
  while(i<20){
   console.log(i);
   i++;
  }
  let q=1;
  do{
   
   console.log(q);
   q++;
  }while(q<10);

  for(let u=0;u<=100;u++){
      if(u%3==0)console.log("Fizz");
      else if(u%5==0) console.log("Buzz");
      else if(u%3==0 && u%5==0) console.log("FizzBuzz");
      else console.log(i);
  }
  const items=['apple','banana','orange','lemon'];
  const users=[{name:'Brad'}, {name:'kate'}, {name:'stefan'}];
  for(let i of items){
   console.log(i[1][1]);
  }

  const map= new Map();
  map.set('name','john');
  map.set('age','30');
  for(const [key,value] of map){
   console.log(key, value);
  }

  const colorObj={
   color1:'red',
   color2:'orange',
   color3:'blue',
   color4:'green',
  };
  for(const key in colorObj){
   console.log(colorObj[key]);
  }

  const socials=['twitter', 'google', 'meta', 'facebook'];
  console.log(socials.__proto__);
  socials.forEach(function(item){
   console.log(item);
  })
   function logSocials(socials){
 console.log(socials);
   }

   socials.forEach(logSocials);