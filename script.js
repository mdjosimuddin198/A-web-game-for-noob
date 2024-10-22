let winnerPattarn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
let count =0
let firstPlayer = true

let buttonClick = document.querySelectorAll(".box")

let winerman=document.querySelector("#win")

let matchDrew=()=>{
    winerman.innerText=`Match is Draw,Try Letter  \n Scroll Down for Play New  Game  `
    winerman.style.display="block"
}

let winerShow=(winer)=>{
    winerman.innerText=`Congratulation Winer is the ${winer} \n Scroll Down for Play New Game `
}

buttonClick.forEach((button) => {
    button.onclick = () => {
        if (firstPlayer) {
            
            button.innerText = "O"
            firstPlayer = false

        }
        else {
            firstPlayer = true
            button.innerText = "X"
            
        } 
        chackWiner()
       
      
        
       
      
        button.disabled = true
        count++
        if(count===9 && !chackWiner()){
            console.log("match is drew ")
            matchDrew()
        }
        
    }
})


let chackWiner=()=>{
    for (let btn of winnerPattarn) {
        let position1 = buttonClick[btn[0]].innerText
        let position2 = buttonClick[btn[1]].innerText
        let position3 = buttonClick[btn[2]].innerText
    
        if (position1 != ""&& position2 != ""&& position3 != ""){
            if(position1===position2 && position1 ===position3){
                // alert(`the winer is ${position1}`)
                winerman.style.display="block"
                winerShow(position1)
                disabledButon()
                return true

            }
        }

        }
}




let resetGame=document.querySelector("#reset")
resetGame.onclick=()=>{
    winerman.style.display="none"
    firstPlayer=true
    enableButton()

}




let disabledButon=()=>{
    for (let disable of buttonClick){
        disable.disabled=true
    }
}


let enableButton=()=>{
    for(let enable of buttonClick){
        enable.disabled=false
        enable.innerText=""

    }

}
// const newGame=()=>{
//     firstPlayer=true
//     count=0
//     enableButton()
//     winerman.innerHTML="<button>New game</button>"
//     winerman.style.display="block"

// }




// console.log(winnerPattarn[0][0]) // access winerpattarn 