let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetButton")
let newGamebtn=document.querySelector("#newGame")
let msg_container=document.querySelector(".msgContainer")
let msg=document.querySelector("#msg")

let turn0=true //palyer X , player o

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("u touched my talalalaal")
        if(turn0){
            box.innerHTML="O"
            turn0=false

        }
        else{
            box.innerHTML="X"
            turn0=true
        }
        box.disabled=true 

        checkwinner();
    })
})


const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`
    msg_container.classList.remove("hide")
    disableboxes()
}

const resetgame=()=>{
    turn0=true
    enableboxes()
    msg_container.classList.add("hide")

}

const checkwinner=()=>{
    for(let pattern of winPatterns){
       /* console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText)
           */ 
           let pos1text=boxes[pattern[0]].innerText
           let pos2text=boxes[pattern[1]].innerText
           let pos3text=boxes[pattern[2]].innerText
        
        if(pos1text!="" && pos2text!="" && pos3text!=""){
            if(pos1text===pos2text && pos2text===pos3text){
                console.log("winner",pos1text)
                showwinner(pos1text)
            }
        }
    }
}
 
newGamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)