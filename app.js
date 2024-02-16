let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgBox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");
let turn0 = true;
let count = 0;
const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgBox.classList.add("hide");
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgBox.classList.remove("hide");
    disableBoxes()
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3 && posval3 === posval1){
                showWinner(posval1);
            }
        }
    }
}
const checkDraw = () => {
    if(count == 9){
        msg.innerText = "Game is Draw";
        msgBox.classList.remove("hide");
        disableBoxes();
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }else {
            box.innerText = "X";
            turn0 = true;
        }
        count = count + 1;
        box.disabled = true;
        checkWinner();
        checkDraw();
    });
});
resetBtn.addEventListener("click",resetGame);