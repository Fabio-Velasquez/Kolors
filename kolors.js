

// ================================\\
//help functions 
//================================\\
const pickColor = () => {
    // pick a random number 0 - 5 inclusive
    const random = Math.floor(Math.random() * colors.length);
    
    return colors[random];
}

// this function will generate a color through r gb means 
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// this will generate the number of colors needed to play teh game.
const generateRandomColors = (num) => {
    let output = [];
    for(let i = 0; i < num; i++)
    {
        output.push(generateRandomColor());
    }
    return output;
}

// will iterate through each square and change it with the correct color.
const changeColors = (color) => {

    squares.forEach((square) => {

        square.style.backgroundColor = color;
    });

};

// ================================\\
//Init variables
// ================================\\



// select elements 
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const easyButton = document.getElementById("easyButton");
const hardButton = document.getElementById("hardButton");
let numsquares = 6

// choose winning color
let colors = generateRandomColors(numsquares);
let pickedColor = pickColor();

colorDisplay.textContent = pickedColor; 


// ================================\\
//our main code
// ================================\\


// reset colors button 
resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    title.style.backgroundColor = "black"
    for(let i = 0; i < colors.length ; i++)
    {   
        squares[i].style.backgroundColor = colors[i];
    }
});

// easy button
easyButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numsquares = 3;
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0 ; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});

// hard button
hardButton.addEventListener("click", function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numsquares = 6;
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0 ; i < squares.length; i++)
    {
            squares[i].style.backgroundColor = colors[i];  
            squares[i].style.display = "block";
    }
});

// setting the squares
for (let i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners 
    squares[i].addEventListener("click", function() {
       // get the color of the clicked square 
       const clickedColor = this.style.backgroundColor;
       // and compare the color picked. 
       if(clickedColor === pickedColor)
       {
            title.style.backgroundColor = pickedColor;
            message.textContent = "Correct!";
            changeColors(pickedColor);
           
       }
       else 
       {
            this.style.backgroundColor = "black";
            message.textContent = "You Suck";
       }
    });
}

