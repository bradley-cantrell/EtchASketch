
//Creates a variable that selects our buttons
const creationButton = document.getElementById("creation-button");
const resetButton = document.getElementById("reset-button");
const maxGridSize = 2500;

//Prompts the user for input and converts that to the number of canvas divs that need to be made
creationButton.addEventListener("click", function(){
    var userInput = prompt("How many squares per side would you like your new grid to be?", "16");
    var inputToInt = parseInt(userInput);
    gridSize = inputToInt * inputToInt;
  
    console.log(gridSize); //test logging, remove
    
    for(i=0;i<gridSize;i++){ //generates the canvas

        let sketchpad = document.querySelector('#sketchpad'); 
    
        const canvas = document.createElement('div') 
     
     
        canvas.classList.add("canvas"); 
     
        sketchpad.appendChild(canvas); 
            
    }
  
    for(i=0;i<gridSize;i++){ //paints tiles on mouseover
        let paintedTile = document.getElementsByClassName("canvas")[i]; 
        
        paintedTile.onmouseover = function() {
            paintedTile.classList.add("painted"); 
            
    
    }} 
        
})

resetButton.addEventListener("click", function(){
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    const sketchpad = document.querySelector('#sketchpad');
    removeAllChildNodes(sketchpad);
})

