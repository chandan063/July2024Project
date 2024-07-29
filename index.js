// document.getElementById('').id;
// document.getElementById('').className;
// document.getElementById('').getAttribute('id')
// document.getElementById('').getAttribute('class')

// document.getElementById('title1').setAttribute('class','help')
//-----> it will set new class and overeride the old one

// document.getElementById('title1').setAttribute('class','help') for setting to class name together
const title=document.getElementById('title1');
title.style.backgroundColor='green';
title.style.padding='60px';
title.style.borderRadius='15px';


// textContent used to bring all content whether its visible or not 
title1.textcontent
// output-->'Dom learning on vs code hidden text'



// innerText will only give you visible content not which has been displayed none
title1.innerText
// output---'Dom learning on vs code'



// innerHtml will give content and if in that content some html is written then it will provide that also

title1.innerHtml
// output----->Dom learning on vs code <span style="display: none;">hidden text</span>

// Query selector
document.querySelector('h2')
// it will give you the first h2 of web page 
// using this we can select on the basis of id,class 
document.querySelector('#title1')
document.querySelector('.heading')

const myul=document.querySelector('ul')
myul.querySelector('li');
const turnGreen=myul.querySelector('li')
turnGreen.style.backgroundColor='green';
turnGreen.style.padding='10px'
turnGreen.innerHTML;
turnGreen.innerHTML='hello first';

// querySelectorAll

document.querySelectorAll('li')
const myTempNode=document.querySelectorAll('li')

myTempNode[0].style.backgroundColor='red'
'red';

const myli=document.querySelectorAll('h1');
myli.forEach(function (l){
    li.style.backgroundColor='green';
})


// converting htmlcollection into array for applying any loop
const myItem=document.getElementById('list-items');
// myItem will not have any foreach
const converted=Array.from(myItem);
// after converting it have forEach
converted.forEach(function (l){
    l.style.backgroundColor='red';
})