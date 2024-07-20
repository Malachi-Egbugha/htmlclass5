//claculate the total sum of prices for all items in the given array

/*

const items = [
    { name: 'Banana', price: 500},
    { name: 'Milk', price: 8000 },
    { name: 'Orange', price: 600 },
    { name: 'Apple', price: 6000 },
    { name: 'Orange', price: 600 }
  ];
  var total=0;
  items.forEach(callbackfunction);
  function callbackfunction(currentitem){
    total+=currentitem.price
    

  }
  var result =items.reduce(reducerfunction,0);
  function reducerfunction(accumulator, current, index, arr){
    return current.price + accumulator
    
  }
  console.log('reduce',result);
  console.log('foreach',total);
  
  */
//given an array of years current leap years
var year = [2011,2012,2013,2014,2015,2016];

function leapyear(input){
  
  var leap=input.reduce((accumulator, currentitem)=>{
   
    if(currentitem % 4 == 0){
      console.log(accumulator);
      accumulator=accumulator.push(currentitem);
     
      
     
      //accumulator.push(currentitem);
       //return accumulator;

    }
    return accumulator;

  },[]);
  //return leap;
}
console.log(leapyear(year));
