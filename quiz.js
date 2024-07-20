import questions  from "./questionbank.js";
import { reset } from "./quizservices.js";
var endtime = new Date(new Date().getTime() + 5000);
var endtimehour=endtime.getHours().toString();
var endtimeminutes=endtime.getMinutes().toString();
var endtimeseconds=endtime.getSeconds().toString();
document.getElementById("endtime").innerHTML=`${endtimehour}:${endtimeminutes}:${endtimeseconds}`;
var settimer=setInterval(callbackfunct, 1000);
function callbackfunct(){
    var currenttime = new Date();
    var currenttimehour = currenttime.getHours();
    var currenttimeminutes = currenttime.getMinutes();
    var currenttimeseconds= currenttime.getSeconds();
    document.getElementById("timer").innerHTML=`${currenttimehour}:${currenttimeminutes}:${currenttimeseconds}`;
  if(currenttime.getTime() >= endtime.getTime()){
    clearInterval(settimer);
    alert("Exam Ends");

  }
}
/*
var endtime = new Date(new Date().getTime() + 3000);
setInterval(timer, 1000);
document.getElementById("remaintimer").innerHTML=`${endtime.getHours().toString()}:${endtime.getMinutes().toString()}:${endtime.getSeconds().toString()}`;;
function timer(){
    const now =new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const settimer =`${hours}:${minutes}:${seconds}`;
    document.getElementById("timer").innerHTML=settimer;
    if(now.getTime() >= endtime.getTime()){
        alert("End")

    }

}
*/
//define current questionindex;
var currentquestionindex=0;
var score =0;
var currentquestionnumber;
//select question dom
var currentquestion=document.getElementById("question");
//select answer dom
var answer = document.getElementById("answer-button");
//select next dom
var next=document.getElementById("next-btn");
//loop through the answers



var startquiz=()=>{
    currentquestionnumber=currentquestionindex + 1
    var tempquestion=questions[currentquestionindex];
    currentquestion.innerHTML=currentquestionnumber + " " + tempquestion.question;
    for(var i=0; i < tempquestion.answers.length;i++){
        //create a button
        var button=document.createElement("button");
        button.innerHTML=tempquestion.answers[i].text;
        button.dataset.correctanswer=tempquestion.answers[i].correct;
        button.classList.add("btn");
        button.addEventListener("click", selectanswer)
        answer.append(button);
        } 
    
 
}
function selectanswer(e){
    var eventnode=e.target;
    if(eventnode.dataset.correctanswer == "true"){
        score++;
        eventnode.classList.add("correct");
    }
    else{
        eventnode.classList.add("incorrect");

    }
    next.style.display="block";
    for(var i=0;i < answer.children.length;i++){

        answer.children[i].setAttribute("disabled","true");
    }

}
next.addEventListener("click", takeustonextquestion);
function takeustonextquestion(){
    //remove current option
    reset(answer);
    currentquestionindex++;
    if(currentquestionindex < questions.length){
    startquiz();
    }else{
        currentquestion.style.textAlign="center";
        next.style.display="none";
       currentquestion.innerHTML=`Your scored ${score}`;

    }
    

}

startquiz()
/*
function selectanswer(e){
   
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
        
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    console.log(score);
for(var i=0; i < answer.children.length; i++){
    if(answer.children[i].dataset.correct == "true"){
        answer.children[i].classList.add("correct");
    }
    answer.children[i].setAttribute("disabled","true");

}
next.style.display="block";
}
next.addEventListener("click",()=>{
    if(currentquestionindex < questions.length ){
        handleNextButton();
    
    }
    
    
    });

function handleNextButton(){
    resetanswer();
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        startquiz();


    }
}

function resetanswer(){
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);

    }
}
    
appendChild() method is used to append a node as the last child of a node, for
append() method is used in JavaScript to append HTML content or a element to the end of a specific HTML element,
*/