
//Creates variables that select our buttons
const creationButton = document.getElementById("creation-button");
const sketchpad = document.querySelector('#sketchpad');

function removeAllChildNodes(parent) { //clears an existing grid if there is one
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function layoutGrid(gridColumns) { //creates the grid based on user input
    const sketchpad = document.getElementById('sketchpad')
    sketchpad.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`
    sketchpad.style.gridTemplateRows = `repeat(${gridColumns}, 1fr)`
}


//Prompts the user for input and converts that to the number of columns the grid needs

creationButton.addEventListener("click", function(){
    let userInput = prompt("How many squares per side would you like your grid to be? Pick a number between 1 and 100.")
    let gridColumns = parseInt(userInput);
    let gridSize = gridColumns * gridColumns; 
   
        if(gridColumns>0 && gridColumns<101){ //forces a number between 1 and 100
            removeAllChildNodes(sketchpad);
            layoutGrid(gridColumns);

            for(i=0;i<gridSize;i++){ //generates the divs within the grid
                const canvas = document.createElement('div') 
                canvas.classList.add("canvas"); 
                sketchpad.appendChild(canvas);    
            }
        
            for(i=0;i<gridSize;i++){ //paints divs on mouseover
                let paintedTile = document.getElementsByClassName("canvas")[i]; 
                let paintColors = ["red", "yellow", "orange", "green", "blue", "violet", "indigo"];
                let randomColor = paintColors[Math.floor(Math.random() * paintColors.length)]

                paintedTile.onmouseover = function() {
                    paintedTile.style.backgroundColor = randomColor;
                    }
        
            }
        }else{  //throws an error if the input is not a number between 1 and 100 or is blank
            alert("You must pick a number between 1 and 100."); //hanldes unexpected input
        }

})
