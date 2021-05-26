const renkler= ["green", "red" , "blue", "yellow", "black", "white"];
let flag=0;
document.querySelector(".btn").onclick= renkSec;

function renkSec(){
    document.querySelector("body").style.backgroundColor= renkler[0+flag];
    document.querySelector(".h1").innerHTML="BackgroundColor: "+renkler[0+flag];

    flag++;
    if(flag==renkler.length-1){
        flag=0;
    }

}