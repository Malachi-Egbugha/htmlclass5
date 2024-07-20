var parent = document.getElementById("parent");
var firstchild= parent.firstElementChild;
var second =parent.children[1];
//console.log(parent.children);
//var second =document.getElementById("second");
var newli = document.createElement("li");
var textnode = document.createTextNode("Water");
newli.append(textnode);
newli.setAttribute("class","first");
//parent.append(newli);
parent.replaceChild(newli, firstchild);
parent.removeChild(second);
console.log(newli);
//firstchild.style.color="#00ff00";
//firstchild.style.fontSize="100px";
var buttonnode = document.getElementById("clickme");
buttonnode.addEventListener("click", clickhandler);
function clickhandler(){
    alert("You just click")
}