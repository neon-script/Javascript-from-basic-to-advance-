function add(num1,num2)// parameters
{
  console.log(num1+num2)
}
add(2,5)// arguments
function multiply(num1,num2)
{
   return num1*num2;
}
 const m= multiply(6,7)
 console.log(m+4);
// arguments keyword print nu number of value
function sum()
{
  console.log(arguments) //[1,23,45,66,78,23]
}
sum(1,23,45,66,78,23)
console.log(typeof arguments)//object
// ... spread operator 
function diff(... num1)
{
    console.log(num1);//[12,23,45,67,34,89,56]
  console.log(typeof num1)//object
}
diff(12,23,45.67,34,89,56)


function sum1()
{
  for(var i=0;i<=arguments.length;i++)
  {
    console.log(arguments[i])// 10 23 34 45 56 67
  }
}
sum1(10,23,34,45,56,67)


function AddSum()
{
  let ans=0
  for(var i=0;i<arguments.length;i++)
    {
      ans= ans+ arguments[i];
    }
        return ans;

}
let res= AddSum(12,23,34,56,89,90)
console.log(res)//304




// spread operator using for loop
function diff(... num2)
{
  let res1=0
  for(var i=0;i<num2.length;i++)
    {
      res1= res1-num2[i];
    }
  return res1;
}
let diff1= diff(12,34,45,78,67,89)
console.log(diff1)//-325
// multiply function using spread operator
function multiply(... mul)
{
  let res2= 1
  for(var i=0;i<mul.length;i++)
  {
    res2= res2*mul[i]
  }
  return res2;
}
let mul21= multiply(23,45,25,67)
console.log(mul21)// 1733625
  

