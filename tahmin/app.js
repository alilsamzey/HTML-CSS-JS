let random= Math.floor(Math.random() * 20) + 1;
let eyp=0;
let puan=10;
document.querySelector(".puan").innerText=puan;
document.querySelector(".kontrolet").onclick= kontrolEt;

function kontrolEt(){
           
    const sayi=document.querySelector(".input").value;
    if (sayi==random){
        document.querySelector(".tb").innerText="Tebrikler bildiniz!"
        document.querySelector(".main").style.backgroundColor="green";
        eyp=puan-1;
    document.querySelector(".eyp").innerText=eyp;
    }else if (sayi<random){
        document.querySelector(".tb").innerText="Artir!"
    } else if (sayi>random){
        document.querySelector(".tb").innerText="Azalt!"
    }
    puan--;
    document.querySelector(".puan").innerText=puan;
    if (puan<=0 ){
        document.querySelector(".tb").innerText="Deneme Hakkiniz Kalmadi!"
        document.querySelector(".tb").innerText="Tekrar Deneyiniz!"
    }
    }


   
document.querySelector(".tekrar").onclick= tekrar;
function tekrar(){
    let hak=
random= Math.floor(Math.random() * 20) + 1;
document.querySelector(".eyp").innerText=eyp;
puan=10;
document.querySelector(".puan").innerText=puan;
document.querySelector(".kontrolet").value=" ";
document.querySelector(".main").style.backgroundColor="aqua";
document.querySelector(".tb").innerText="Tahmine Baslaniyor!"

}