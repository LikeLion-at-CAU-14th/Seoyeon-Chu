// 1. js파일에서 접근해야 하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

// 가위, 바위, 보 버튼
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

// 점수 표시
const myScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".computer-score");

// 결과
const displayResult = document.getElementById("display-result");

// reset 버튼
const resetButton = document.getElementById("reset-button");

// 점수 변수
let myScoreCount = 0;
let computerScoreCount = 0;

// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice); 
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetButton.addEventListener("click", resetGame);

// 3. displayMyChoice 함수 설정
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id; 
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이도록 하는 함수
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 5-1. 승패 판정 함수
function getResult(myChoice, comChoice) {
  if (myChoice === comChoice) {
    return "draw";
  }

  if (
    (myChoice === "rock" && comChoice === "scissors") ||
    (myChoice === "scissors" && comChoice === "paper") ||
    (myChoice === "paper" && comChoice === "rock")
  ) {
    return "win";
  }

  return "lose";
}

// 5-2. 점수 업데이트 함수
function updateScore(result) {
  if (result === "win") {
    myScoreCount++;
    myScore.innerText = myScoreCount;
    displayResult.innerText = "승~";
  } else if (result === "lose") {
    computerScoreCount++;
    computerScore.innerText = computerScoreCount;
    displayResult.innerText = "패ㅋㅋ";
  } else {
    displayResult.innerText = "무승부;;";
  }
}

// 6. start 함수
function start(mychoice) {
    let resultArray = getComChoice();
    displayComChoice(resultArray); 

// 6-1. 승패 판정 및 점수 반영
    let result = getResult(mychoice, resultArray[0]);
    updateScore(result);
}  

// 7. reset 함수
function resetGame() {
  myScoreCount = 0;
  computerScoreCount = 0;

  myScore.innerText = 0;
  computerScore.innerText = 0;

  myHandText.innerText = "";
  computerText.innerText = "";
  myHandIcon.className = "icon";
  computerIcon.className = "icon";
  displayResult.innerText = "";
}

// 7. 다크모드 버튼 구현
const darkModeButton = document.getElementById("darkmode-button");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});