// Array is the collection of items

document.querySelector("h3").innerHTML=`let mark=[11,23,4,5,34,43];<br>
console.log(mark);<br>
console.log("the length of mark array is "+mark.length);//property;<br>
let str=[
  "super","man","spiderman","batman","wonder","women"
];<br>
console.log(str);<br>
console.log(mark[5],mark[1]); <br>
mark[4]="hello" <br>
console.log(mark)`; 



let lect=document.createElement("h3");lect.innerText=`
// looping over an array 
let str=[
    "super","man","spiderman","batman","wonder","women","iron man"
]; 
// print all element of an array 

for(let i=0;i<str.length;i++)
{
   console.log(str[i]);
} 

console.log("=============") 

// forof loop <br>
for (const item of str) {
    console.log(item);
} 
let cities=["delhi","pune","chennai","patna","hyderabad"]; 
for(let el of cities){
    console.log(el.toUpperCase())
} 
`;
document.querySelector("#lect1").after(lect);


let practice=document.createElement("h3");
practice.innerText=`// practice 
// find the average<br>
let marksStudent=[85,97,44,37,76,60];
let totalmark=0;
for(let val of marksStudent){
    totalmark=totalmark+val;
}
let avg=totalmark/marksStudent.length;
console.log("average marks of the class is"+avg);//66.5`;
let prac=document.getElementById("practice");
prac.after(practice);
prac.style.color="Yellow";


let lect3=document.getElementById("lect2");
let practice2=document.createElement("h3");
practice2.innerText=`let items=[250,645,300,900,50];
// using forof loop
let idx=0;
for(let value of items){
    let offer=value/10;
    value[idx]=value[idx]-offer;
    idx++;
}
console.log(items);
// using for loop
for(let i=0;i<items.length;i++){
    items[i]=items[i]-(items[i]/10)
}
// console.log(items);`;
lect3.after(practice2);
lect3.style.color="aqua"

let foodItems=["potatoes","apple","banana",
    "tomato"
    ];




// button event for push();
let list1=document.getElementById("list1");
let more1=document.createElement("p");
more1.innerText=`// methods in array
let foodItems=["potatoes","apple","banana",
"tomato"
];
// push method will add the element in the last 
foodItems.push("chips");
foodItems.push("fruti","color");
console.log(foodItems);`;
push.addEventListener("click",()=>{
    list1.append(more1); 
})
// hide button
let hide=document.getElementById("hide");
hide.addEventListener("click",()=>{
    more1.style.display="none";
})


// adding all content after in ul
let uli=document.querySelector("ul");
let conten=document.createElement("p");
conten.innerText=`// pop method will delete one item from last and also return 
// foodItems.pop("color");
let deletedItem=foodItems.pop();
console.log(deletedItem);

// toString method- convert the array into string.
console.log(foodItems.toString()); 

// concat()-----------
let marvel=["thor","ironman","spiderman","hulk"];
let dc=["superman","batman"];
let indian=["saktiman","krish"];
// let heros=marvel.concat(dc);
// we can add  multiple
let heros=marvel.concat(dc,indian);
console.log(heros);

// unshift()
marvel.unshift("antman")
// it will add in starting
console.log(marvel);

// shift will delete from the first
let vl=marvel.shift() ;
console.log(vl);   


// slice
let newHero=["antman","monkeyman","animan","aquaman","wonder-women","pinkman"];
console.log(newHero);
console.log(newHero.slice(1));

// splice
// add element
newHero.splice(2,2,"chapal-man");
// delete element
newHero.splice(3,1);
// replace element
newHero.splice(3,1,101);
console.log(newHero);
`;
let btn=document.getElementById("btn");
btn.addEventListener("click",show);
function show(){
    uli.after(conten);
}

