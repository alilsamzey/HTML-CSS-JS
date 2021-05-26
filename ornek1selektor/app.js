const par=document.getElementById("par");

par.style.fontWeight="bold";
par.style.color="green";
const btn=document.querySelector(".btn");
btn.innerHTML="GONDER🤣";

btn.onmouseover= function () {
    btn.innerHTML="bu ne haci";
    btn.style.background="blue"
    
}
btn.onmouseout= function () {
    btn.innerHTML="GONDER🤣";
    ;
      
}