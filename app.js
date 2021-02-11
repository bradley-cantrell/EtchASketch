
//Creates a variable that selects our button
const generateButton = document.getElementById("generate-button");
const resetButton = document.getElementById("reset-button");

//Prompts the user for input and converts that to the number of canvas divs that need to be made
document.getElementById("generate-button").addEventListener("click", function(){
    var userInput = prompt("How many squares per side would you like your new grid to be?", "16");
    var inputToInt = parseInt(userInput);
    gridSize = inputToInt * inputToInt;
  
    console.log(gridSize);
    
    for(i=0;i<gridSize;i++){ //generates the canvas

        const sketchpad = document.querySelector('.sketchpad'); 
    
        const canvas = document.createElement('div') 
     
     
        canvas.classList.add("canvas"); 
     
        sketchpad.appendChild(canvas); 
            
    }
  
    for(i=0;i<gridSize;i++){ //paints tiles on mouseover
        const paintedTile = document.getElementsByClassName("canvas")[i]; 
        
        paintedTile.onmouseover = function() {
            paintedTile.classList.add("painted"); 
    
    }}

        

        
})

