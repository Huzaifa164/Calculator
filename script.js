const input = document.querySelector("input");
const buttons = document.querySelectorAll(".btn");

let inputString = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    if(event.target.innerHTML === '=') {
        inputString = eval(inputString);
        input.value = inputString;
    }
    else if(event.target.innerHTML === 'C') {
        inputString = "";
        input.value = inputString;
    }
    else{
        inputString = inputString + event.target.innerHTML;
        input.value = inputString;
    }   
  });
});