// Initial Number Count
let currentNumber = 0;
const numberUpdate = document.getElementById("currentNum");
let decButton = document.getElementById("decrease");
let inButton = document.getElementById("increase");
let resButton = document.getElementById("reset");


const red = ()=>{
    if(numberUpdate){
        numberUpdate.style.color = "red";
    }
};

const green = () =>{
    if(numberUpdate){
        numberUpdate.style.color = "green";
    }
}
const black = () =>{
    if(numberUpdate){
        numberUpdate.style.color = "black";
    }
}
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

 


