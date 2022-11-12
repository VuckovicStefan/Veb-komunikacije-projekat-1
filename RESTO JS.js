/*----------------------------------------------OTVARANJE MODAL BOXA----------------------------------------------*/ 


const open = document.getElementById("open");
const modalbox = document.getElementById("modalbox");
const close = document.getElementById("close");

open.addEventListener("click", ()=>{
    modalbox.classList.add("show");
});

close.addEventListener("click", ()=>{
    modalbox.classList.remove("show");
});


/*----------------------------------------------IMAGE SLIDER STRELICE----------------------------------------------*/ 


var indexValue=1;
showImg(indexValue);
function btmslide(e){showImg(indexValue=e);}
function slideslide(e){showImg(indexValue+=e);}
function showImg(e){

    var i;
    const img= document.querySelectorAll(".images img");
    const sliders= document.querySelectorAll(".btmsliders span");
    if (e>img.length){indexValue=1}
    if (e<1){indexValue=img.length}

    for(i=0;i<img.length; i++){
        img[i].style.display="none";
    }
    img[indexValue-1].style.display="block";

    for(i=0;i<sliders.length; i++){
        sliders[i].style.background="white";
    }
    sliders[indexValue-1].style.background="rgb(250, 48, 48)";
}


/*----------------------------------------------DISHES SLIDER----------------------------------------------*/ 




/*----------------------------------------------OTVARANJE MENIJA----------------------------------------------*/ 


const mobile = document.querySelector(".mobile");
const menimobile = document.querySelector(".menimobile");
const izlaz = document.querySelector(".izlaz");
const am = document.querySelector(".am");
const af = document.querySelector(".af");
const ad = document.querySelector(".ad");
const ag = document.querySelector(".ag");

mobile.addEventListener("click", ()=>{
    menimobile.classList.add("kkk");
});
izlaz.addEventListener("click", ()=>{
    menimobile.classList.remove("kkk");
});
am.addEventListener("click", ()=>{
    menimobile.classList.remove("kkk");
});
af.addEventListener("click", ()=>{
  menimobile.classList.remove("kkk");
});
ad.addEventListener("click", ()=>{
  menimobile.classList.remove("kkk");
});
ag.addEventListener("click", ()=>{
menimobile.classList.remove("kkk");
});


/*----------------------------------------------LIKE HEART----------------------------------------------*/ 


const likeHeart = document.querySelectorAll(".heart");


likeHeart.forEach(element => {
  element.addEventListener("click", ()=>{
    let count = element.querySelector("#count");

    if (element.classList.contains("clicked")) {
      element.classList.remove("clicked");
      count.textContent--;
    } else {
      element.classList.add("clicked");
      count.textContent++;
    }
  })
});