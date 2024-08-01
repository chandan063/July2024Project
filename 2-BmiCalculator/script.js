const form=document.querySelector('form');
form.addEventListener('submit',function(e){
 e.preventDefault();
 //for getting value from html page
 const height=parseInt(document.querySelector('#height').value)
 const weight=parseInt(document.querySelector('#weight').value)

 const result=document.querySelector('#results');

 if(height === '' || height<0 || isNaN(height)){
    result.innerHTML=`Please give a valid height ${height}`;
 }
 else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML=`invalid age ${weight}`;
 }
 else{
    var bmi=(weight/((height*height)/10000)).toFixed(2);
    //show the result
    result.innerHTML=`<span>${bmi}</span>`
 }

 //for checking bmi and reflection message

 if(bmi<18.6){
    const underweight=document.getElementById('underWeight');
    underweight.style.color='yellow';
 }
 else if(bmi>18.6 && bmi<24.9){
    const NormalWeight=document.getElementById('NormalWeight');
    NormalWeight.style.color='green';
 }
 else if(bmi>24.9){
    const OverWeight=document.getElementById('OverWeight');
    OverWeight.style.color='orange';
 }

})
