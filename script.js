boxes = document.querySelectorAll(".btn");
reset = document.querySelector(".reset");
newGame = document.querySelector(".new");
result = document.querySelector(".result");

let flag=0;
let count = 0;
let winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText!="") return;
            if(flag===0){
                box.innerText = "O";
                flag=1;
            }
            else{
                box.innerText = "X";
                flag=0;
            };
            count++;
            console.log(count);
            checkWin();
        });
    }
)


function checkWin(){
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                result.innerText = `Winner is ${pos1}!`;
                console.log("Winner");
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
            }
            if(count==9){
                result.innerText = "Draw";
            }
        }
    }
}

reset.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText="";
        box.disabled = false;
        result.innerText = "";
        count=0;
    }
    flag=0;
});

newGame.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText="";
        box.disabled = false;
        result.innerText = "";
        count=0;
    }
    flag=0;
});

