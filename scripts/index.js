let bt= document.getElementsByClassName("btn")[0];
let pare=document.getElementsByClassName("parent2")[0];
let close=document.getElementsByClassName("close")[0];
bt.addEventListener("click",()=> {
    pare.style.display ="block";
});

close.addEventListener("click",()=> {
    pare.style.display ="none";
});
