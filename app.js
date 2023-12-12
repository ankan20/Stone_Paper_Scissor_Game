let ankanScore =0;
let userScore =0;
let userSCoreMsg = document.querySelector(".you");
let ankanScoreMsg = document.querySelector(".ankan");
let winStatusMsg = document.querySelector(".win_status");
let ankanPickedMsg = document.querySelector(".apick");
let userPickedMsg = document.querySelector(".ypick");
const userChoice = document.querySelectorAll(".item");
const restartBtn = document.querySelector("#restart");


const genAnkanPicked =()=>{
    const options = ["Stone","Paper","Scissor"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}

const drawGame =(userPicked,ankanPicked)=>{
    ankanPickedMsg.innerText =`Ankan picked : ${ankanPicked}`;
    userPickedMsg.innerText=`You picked : ${userPicked}`;
    winStatusMsg.style.backgroundColor="#9BB8CD";
    document.querySelector(".choice").style.display ="flex";
    winStatusMsg.innerText=`Draw Game ,let's play again.`;
}


const showResult =(userPicked,ankanPicked,userWin)=>{
    if(userWin){
        winStatusMsg.innerText="You Win !";
        winStatusMsg.style.backgroundColor="green";
        userScore++;
        userSCoreMsg.innerText=`You : ${userScore}`;
        ankanPickedMsg.innerText =`Ankan picked : ${ankanPicked}`;
        userPickedMsg.innerText=`You picked : ${userPicked}`;
        document.querySelector(".choice").style.display ="flex";
    }
    else {
        winStatusMsg.innerText="Ankan Wins !";
        winStatusMsg.style.backgroundColor="red";
        ankanScore++;
        ankanScoreMsg.innerText=`Ankan : ${ankanScore}`;
        ankanPickedMsg.innerText =`Ankan picked : ${ankanPicked}`;
        userPickedMsg.innerText=`You picked : ${userPicked}`;
        document.querySelector(".choice").style.display ="flex";
    }
}

const playGame = (userPicked)=>{
    const ankanPicked = genAnkanPicked();
    let userWin = false;
    if(userPicked === ankanPicked){
        drawGame(userPicked,ankanPicked);
        return;
    }
    else{
        if(userPicked==="Paper"){
            userWin = ankanPicked ==="Stone" ?true:false;
        }
        else if(userPicked==="Stone"){
            userWin= ankanPicked ==="Scissor"?true:false;
        }
        else {
            userWin = ankanPicked ==="Paper"?true:false;
        }
    }
    showResult(userPicked,ankanPicked,userWin);
    // console.log(userPicked,ankanPicked,userWin)
}


userChoice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userPicked = choice.getAttribute("id");
        playGame(userPicked);
    })
})

restartBtn.addEventListener("click",()=>{
    ankanScore=0;
    userScore=0;
    userSCoreMsg.innerText=`You : ${userScore}`;
    ankanScoreMsg.innerText=`Ankan : ${ankanScore}`;
    document.querySelector(".choice").style.display ="none";
    winStatusMsg.style.backgroundColor="#9BB8CD";
    winStatusMsg.innerText=`Let's Play`;
})


