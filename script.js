"use strict";

// firstly, define all the input and outpul fields
let inputbox = document.querySelector("#input-box");
// define all the dropdown options
// define the button
const button = document.querySelector("#button");

// event listener on button: on click it returns the result
//output: return the result of the input and dropdown.value directed

button.addEventListener("click", processOutput);

function processOutput() {
  console.log("button was clicked, processing output");

  // When you click the button,
  // it processes whatever is in the inputbox
  // and writes the result in the output box

  showResult();
}

function showResult() {
  console.log("output is...");
  // remove previous input information
  inputbox.value = " ";
}
