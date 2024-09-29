let main=document.querySelector(".box")
let neg=document.querySelector(".dis1")
let pos=document.querySelector(".dis3")
let show=document.querySelector(".dis2")
let fresh=document.querySelector(".resetbtn")

pos.addEventListener("click",()=>{
    show.innerText++
})

neg.addEventListener("click",()=>{
    if(show.innerText<=0){
        alert("negative")
    }
    else{
    show.innerText--
    }
})

fresh.addEventListener("click",()=>{
    show.innerHTML="0"

})