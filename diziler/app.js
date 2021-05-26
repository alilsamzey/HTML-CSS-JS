const isimler= ["Ahmet", "Mehmet", "Can"];
console.log(isimler);
isimler[2]="ali";
console.log(isimler);
console.log(isimler[0]);
isimler.push("deli");
console.log(isimler);

let h1=document.querySelector(".ha");

h1.innerHTML=isimler;


document.querySelector(".div").innerText=isimler.slice("ali");
