
//Creates variables that select our buttons
const creationButton = document.getElementById("creation-button");
const resetButton = document.getElementById("reset-button");
const sketchpad = document.querySelector('#sketchpad');

//Prompts the user for input and converts that to the number of columns the grid needs

creationButton.addEventListener("click", function(){
    let userInput = prompt("How many squares per side would you like your new grid to be? (1-100)", "16");
    gridColumns = parseInt(userInput);
    gridSize = gridColumns * gridColumns;
    let sketchpad = document.querySelector('#sketchpad'); 
   

    
        if(sketchpad.style.gridTemplateColumns){
            alert("Please reset your previous grid first! Click Reset Grid below.");
        }else if(gridColumns>0 && gridColumns<101){ //forces a number between 1 and 100
            
            function layoutGrid(gridColumns) {
                const sketchpad = document.getElementById('sketchpad')
                sketchpad.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`
                sketchpad.style.gridTemplateRows = `repeat(${gridColumns}, 1fr)`
            }

        
            layoutGrid(gridColumns);

            for(i=0;i<gridSize;i++){ //generates the canvas that can be painted

                
            
                const canvas = document.createElement('div') 
            
            
                canvas.classList.add("canvas"); 
            
                sketchpad.appendChild(canvas); 
                    
            }
        
            for(i=0;i<gridSize;i++){ //paints tiles on mouseover
                let paintedTile = document.getElementsByClassName("canvas")[i]; 
                
                paintedTile.onmouseover = function() {
                    paintedTile.classList.add("painted"); 
                    
            
            }
        
        }}else{  //throws an error if the number is not between 1 and 100
            alert("You must pick a number between 1 and 100.");
        }
        
})

resetButton.addEventListener("click", function(){ //clears existing grid
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    
    removeAllChildNodes(sketchpad);
    
})

