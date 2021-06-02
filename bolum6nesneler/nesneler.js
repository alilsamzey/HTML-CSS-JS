const maas=[2000, 3000, 4000, 5000];

const borc= 2000;

const kredi= borc>1000? "kredi almaz" : "kredi alabilir";

console.log(kredi);


console.log(borc>2000 && maas[1]<4000? "kredi alabilir": "kredi alamaz");

const arabalarhazirmi= function(){
  return "kredi al";
}

console.log(arabalarhazirmi());


const topla=(a,b)=> a+b;

console.log(topla(12,14));

const cikar=()=> 14-12;

console.log(cikar);





  document.querySelector(".h1").onmouseover = function () {
    const h1 = document.querySelector(".h1");
    h1.innerText="hallo welt";
    h1.style.color = "white";
    h1.style.backgroundColor = "black";
  };

  document.querySelector(".h1").onmouseout = function () {
    const h1 = document.querySelector(".h1");
    h1.innerHTML= "Merhaba";
    h1.style.color = "black";
    h1.style.backgroundColor = "white";
  };

  document.querySelector("#btn").addEventListener("click", function () {
    
    document.querySelector(".h2").innerText=`ulan buraya istedihin icerigi koyabilirsin be`;
    
    document.querySelector(".h2").classList.remove("h2");

  });
  

  const arabalar=["ferrari","reno", "mercedes", "topas"];
  const meyveler=["elma", "armut"];

  const bir=[arabalar, meyveler];

  console.log(bir);
  