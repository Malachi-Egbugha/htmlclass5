function bmiresult(bmi){
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
    
export default bmiresult