"use strict";

// firstly, define all the input and outpul fields
let input = document.getElementById("input-box");
let output = document.getElementById("output-box");
// define all the dropdown options
// define the button
const button = document.querySelector("#button");

// event listener on button: on click it returns the result
//output: return the result of the input and dropdown.value directed

button.addEventListener("click", processOutput);

function processOutput() {
  console.log("button was clicked, processing output");
  /*let's read what was written in the input field */
  console.log("input was this:", input.value);

  // When you click the button,
  // it processes whatever is in the inputbox
  // and writes the result in the output box

  showResult();
}

function showResult() {
  // remove previous input information
  // inputbox.value = " ";
}

/**Comments from the class
 * can use the dropdown from the calculator file
 * refer to the document we just used for finding necessary strings
 */
