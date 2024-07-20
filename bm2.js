import {bmivalue} from './services.js';
import bmiresult from './bmresult.js'
//add event for submit
var submitbutton= document.getElementById("submit");
submitbutton.addEventListener("click", calbmi);
function calbmi(e){
    e.preventDefault();
    //extract the value height
    var  height= document.getElementById("height").value;
//extract the value of weight
var  weight= document.getElementById("weight").value;
//calculate bmi
var bmi = bmivalue(weight,height);
//get the result for the calculate bmi
var result=bmiresult(bmi);
//add bmi to span element
var finalbmivalue=document.getElementById("bmival");
finalbmivalue.innerHTML=bmi;
// add result to  span
var finalresult=document.getElementById("bmivalresult");
finalresult.innerHTML=result;

}
//var bmivalue=(weight,height)=>weight/(height * height)
/*function bmiresult(bmi){
    let results;
    if(bmi < 18.5){
    results="Under Weight"

}
else if(bmi>=18.5 && bmi<=24.9){
    results="Your Weigth is Normal";
}
else if(bmi>=25 && bmi<=29.9){
    results ="You are Overweight";
}
else{
    results="You are Obese"

}
return results
}
    */
