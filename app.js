
//Creates variables that select our buttons
const creationButton = document.getElementById("creation-button");
const resetButton = document.getElementById("reset-button");
const maxGridSize = 2500;

//Prompts the user for input and converts that to the number of columns the grid needs

creationButton.addEventListener("click", function(){
    let userInput = prompt("How many squares per side would you like your new grid to be?", "16");
    gridColumns = parseInt(userInput);
    gridSize = gridColumns * gridColumns;
    
  
    function layoutGrid(gridColumns) {
        const sketchpad = document.getElementById('sketchpad')
        sketchpad.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`
        sketchpad.style.gridTemplateRows = `repeat(${gridColumns}, 1fr)`
    }

    layoutGrid(gridColumns);


    for(i=0;i<gridSize;i++){ //generates the canvas that can be painted

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

resetButton.addEventListener("click", function(){ //clears existing grid
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    const sketchpad = document.querySelector('#sketchpad');
    removeAllChildNodes(sketchpad);
})
