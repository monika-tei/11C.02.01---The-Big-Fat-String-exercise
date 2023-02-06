"use strict";
// firstly, define all the input and outpul fields
let result;

let input = document.getElementById("input-box");

let output = document.getElementById("output-box");

let dropdown = document.getElementById("dropdown-choice");

const button = document.querySelector("#button");

// Event listener on button: on "click" it returns the result.

button.addEventListener("click", processOutput);

// Which calls a processing function for output

function processOutput() {
  // console.log("input was this:", input.value);
  dropdown = document.getElementById("dropdown-choice").value;
  input = document.getElementById("input-box").value;

  // now, we need to compare the dropdown option values (choice1-8)
  // and declare what happens with the input value accordingly.
  if (dropdown === "choice1") {
    result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  } else if (dropdown === "choice2") {
    result = input.split(" ")[0];
  } else if (dropdown === "choice3") {
    let firstname = input.split(" ")[0];
    result = firstname.length + " letters";
  } else if (dropdown === "choice4") {
    console.log("middle name");
  } else if (dropdown === "choice5") {
    fileType();
  } else if (dropdown === "choice6") {
    console.log("password");
  } else if (dropdown === "choice7") {
    console.log("3rd character uppercase");
  } else if (dropdown === "choice8") {
    console.log("uppercase and something crazy");
  }
  // and now when we have the result, display it inside Output field!
  // console.log(result);

  function fileType() {
    let isPng = input.endsWith(".png");
    let isJpg = input.endsWith(".jpg");
    if (isPng || isJpg) {
      result = "The filename is JPG or PNG!";
    } else {
      result = "The filename is not JPG or PNG";
    }
  }

  output.value = result;
}
