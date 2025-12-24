/*
FUNCTIONS
*/

// Change Background Color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgba(147, 181, 193, 1)";
}

// Reset Background Color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Display key pressed
function displayKeyPress(event) {
  const pressDisplay = document.getElementById("keyPressDisplay");
  if (pressDisplay) {
    pressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Display user Input

function displayUserInput() {
  const input = document.getElementById("textInput").value;
  const textDisplay = document.getElementById("textInputDisplay");
  if (textDisplay) {
    textDisplay.textContent = `You typed: ${input}`;
  }
}

/*
Event Listeners
*/

function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
  const resetBtn = document.getElementById("resetColorButton");
  const textInput = document.getElementById("textInput");

  if (changeBtn) changeBtn.addEventListener("click", changeBackgroundColor);
  if (resetBtn) resetBtn.addEventListener("dblclick", resetBackgroundColor);
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }

  document.addEventListener("keydown", displayKeyPress);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
