function  timer(){
    const now =new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const settimer =`${hours}:${minutes}:${seconds}`;
    document.getElementById("digitalclock").innerHTML=settimer;

}
timer();
setInterval(timer, 1000);