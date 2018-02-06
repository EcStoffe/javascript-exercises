/*let input = prompt("Please enter your name: ");
console.log("Your name is: ", input);*/


let myInput = document.getElementById("input");
let button = document.getElementById("mySum");

button.addEventListener("click", function () {
    console.log(Math.sqrt(myInput.value));
    document.getElementById("output").innerHTML =+ " " + Math.sqrt(myInput.value)
});


