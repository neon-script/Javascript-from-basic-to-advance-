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
fruits[3]='papaya'
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