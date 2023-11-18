// Initial Number Count
let currentNumber = 0;
const numberUpdate = document.getElementById("currentNum");

// Decrese Button Setup
let decButton = document.getElementById("decrease")

// Increase Button Setup
let inButton = document.getElementById("increase")

// Reset Button Setup
let resButton = document.getElementById("reset")

// Color Change Setup
const red = ()=>{
    if(numberUpdate){
        numberUpdate.style.color = "red";
    }
}
const green = () =>{
    if(numberUpdate){
        numberUpdate.style.color = "green"
    }
}
const black = () =>{
    if(numberUpdate){
        numberUpdate.style.color = "black";
    }}
// Color Change Function
const colorChange = ()=>{
    if (currentNumber > 0){
        green();
    }
    else if (currentNumber< 0){
        red();
    }
    else {
        black();
    }
}

// Function to Increse and Decrease the Number
const resetButtonClick = resButton.addEventListener ("click", function() {
    currentNumber = 0;
    updateNumber();
    colorChange();
    
});
const decreaseButtonClick = decButton.addEventListener ("click", function() {
    currentNumber--;
    updateNumber();
    colorChange();
});
const increaseButtonClick = inButton.addEventListener ("click", function() {
    currentNumber++;
    updateNumber();
    colorChange();
});

const updateNumber = ()=>{
    if (numberUpdate){
        numberUpdate.textContent = currentNumber;
    }};
