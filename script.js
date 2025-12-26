// Initialize counter
let count = 0;

// Get DOM elements
const counterPara = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

// Button click event
incrementBtn.addEventListener("click", function() {
  alert(count); // show un-incremented value
  count++;      // increment counter
  counterPara.textContent = count; // update paragraph
});
