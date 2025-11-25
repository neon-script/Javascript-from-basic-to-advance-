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
     for(const num of numbers){
      total+=num;
     }
     return num;
  }

  console.log(sum(1,2,3,4,5,6,100));
  