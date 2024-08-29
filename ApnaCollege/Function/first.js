// console.log("hello");
// "abc".toUpperCase();
// [1,2,3].push(4);

// fucntion definition

// function functionName(){
//     //do some work
// }

// // function call
// functionName();

// function functionName(para1,para2){
//     //do some work
// }

//================function defineing======

// function print(){
//     console.log("welcome to javascript function");
//     console.log("we are learning js");
// }

// -------function call-----------

// print();

// redundancy===repetation of anything

// @@@@@@@@@ parameterized function @@@@

// function myFunction(msg){
//     console.log(msg);

// }

// we have to pass parameter

// myFunction("hello");

// #####################################

// adding two number

// function sum(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// // sum(4,5);
// console.log(sum(4,5));

// !!!!!!!!! Arrow Function!!!!!!!!!!!!!1

// compact way of writing a function

// const functionName=(para1,para2..)=>{
// // do some work
// }

// const arrowSum=(a,b)=>{
//     return a+b;
// }
// console.log(arrowSum(4,5));

// const divide=(a,b)=>{
//     return a/b;
// }
// console.log(divide(10,2));

// const printHello=()=>{
//     console.log("hellloooo jii");
// }
// printHello();

// ########### practice ###########3

// Question - create a function using the function keyword that takes a string as an argument & returns the number of vowels in the string

// function Countvowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(Countvowels("hello"));


// Question perform the above question using arrow function;

// let countArrow=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==='a' ||
//             char=='e' ||
//             char==='i' ||
//             char==='o' ||
//             char==='u'
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countArrow("aeout"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// forEach loop in arrays

// arr.forEach(callBackFunction)
// callbackfunction:here, it is a function to execute for each element in the array
// a call back is a function passed as an argument to another function.


// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val)=>{
// console.log(val);

// })

// let n=["pune","delhi","chennai"];
// n.forEach((val) => {
//     console.log(val.toUpperCase())
// });

// in forEach loop we can also pass val,index,also array
// ALSO CALLED HIGHER ORDER FUCNCTION

// n.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr)
// });
// --------------------------------

// PRACTICE
// QUESTION- FOR A GIVEN ARRAY OF NUMBERS,PRINT THE SQUARE OF EACH VALUE USING THE FOREACH LOOP.

// let num=[1,2,3,4,5];
// num.forEach((val)=>{
//     console.log(val*val);
//     // return val*val;
// })



let number=document.getElementById("number");
let btn=document.getElementById("btn");
let result=document.getElementById("result");
btn.addEventListener("click",()=>{
    result.textContent=number.value*number.value;
    result.style.color='white'
    number.value="";
})


// some more Array Methods
// Map
// creates a new array with the results of some operation. The value is callback returns are used to form new array;
// arr.map(callbackFnx(val,index,array))

// let nums=[22,3,4,44];
// let newNum=nums.map((val)=>{
//     // console.log(val);
//     return val;
// });
// console.log(newNum);


//============= filter method =================
// creates a new array of elements that give true for a condition/filter
// eg=all even elements

// let arr=[1,2,3,4,5,6];
// let evenArr=arr.filter((val)=>{
//     //return val%2==0;//for even value
//     //return val%2!=0;//for odd value
//     return val>3//value grater than 3
// })
// console.log(evenArr);


// @@@@@@@@@@@@@@@ Reduce method @@@@@@@@@@@@

// perform some operations & reduce the array to a single value.It returns that single value

let arr2=[1,2,3,4,5];
let total=arr2.reduce((previous,next)=>{
    return previous+next;
})
console.log(total);

// for finding max in the given array;
let max=arr2.reduce((prev,cur)=>{
    // if(prev>cur){
    //     return prev;
    // }
    // else return cur;
    return prev>cur?prev:cur;
})
console.log(max)


// practice 
// QUESTIONS
// WE ARE GIVEN ARRAY OF MARKS OF STUDENTS. FILTER OUT OF THE MARKS OF STUDENTS THAT SCORED 90.

// let marks=[92,65,93,87,43,91];
// let res=marks.filter((val)=>{
//     return val>90;
// })
// console.log(res);

// #########################################

// QUESTION 
// TAKE A NUMBER N AS INPUT FORM USER. CREATE AN ARRAY OF NUMBER FROM 1 TO N.
// USE THE REDUCE METHOD TO CALCULATE SUM OF ALL NMBERS IN THE ARRAY.
// USE THE REDUCE METHOD TO CALCULATE PRODUCT OF ALL NUMBERS ON THE ARRAY.

// let n=prompt("enter the number");
let n=5;

let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}

let total1=arr.reduce((prev,cur)=>{
    return prev+cur;
})

let productArray=arr.reduce((pre,cur)=>{
    return pre*cur;
})
let factorial=arr.reduce((pre,cur)=>{
    return pre*cur;
})
console.log(arr);
console.log("sum of the array is: ",total1);
console.log("product of the array is: ",productArray);
console.log("Factorial of the array is: ",factorial);
