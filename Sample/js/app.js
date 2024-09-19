//looks for "text0". Assigns that to the variable called textField0.
const textField0 = document.getElementById("text0");
textField0.innerHTML = showStylizedScore(786);


function showScore(inputNumber) {
  return inputNumber * 100; // Output is a number.
}

function showStylizedScore(scoreInput) {
  return "Your Score is: " + scoreInput * 100;
}
