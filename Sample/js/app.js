// Document Elements
//looks for "text0". Assigns that to the variable called textField0.
const textField0 = document.getElementById("text0");

// textField0.innerHTML = showStylizedScore(786);
const textField1 = document.getElementById("text1");

//Buttons
const increaseScoreButton = document.getElementById("button0");

//Internal Variables
let score = 0;


//Process (what is going to happen in what sequence?)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven()
});


// Controllers
//function showScore(inputNumber) {
 // return inputNumber * 100; // Output is a number.
//}

//function showStylizedScore(scoreInput) {
  //return "Your Score is: " + scoreInput * 100;
//}
//

function increaseScoreByOne () {
  score++;
}

function checkScoreForSeven (){
  if (score >= 7) {
    changeScoreTextColorToGreen();
  }
}

//view
function updateScoreText() {
  textField0.innerHTML = "Your Score is:" + score;
}

//function updatesStatusText(newText) {
  textField1.innerHTML = newText;
//}

function changeScoreTextColorToGreen() {
    textField0.style.color = "green";
}
