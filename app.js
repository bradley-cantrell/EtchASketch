
//Creates a variable that selects our button
const resetButton = document.getElementById("reset-button");

//Prompts the user for input and converts that to the number of canvas divs that need to be made
getSize();

function getSize(){
    var userInput = prompt("How many squares per side would you like your new grid to be?", "16");
    var inputToInt = parseInt(userInput);
    gridSize = inputToInt * inputToInt;
    console.log(gridSize);
}





//Create grid, insert it into html with class canvas so it can be painted later



for(i=0;i<gridSize;i++){ 

    const sketchpad = document.querySelector('.sketchpad'); //selects the .sketchpad div that already exists

    const canvas = document.createElement('div') //creates a new <div> and assigns it to "canvas"
 
 
    canvas.classList.add("canvas"); //adds the class "canvas" to the new <div>
 
    sketchpad.appendChild(canvas); //appends the new div "canvas" to the existing div "sketchpad"

    
}






//Paints a tile when it is hovered
for(i=0;i<gridSize;i++){

    const paintedTile = document.getElementsByClassName("canvas")[i]; //assigns the painted tiles to a variable
    
    paintedTile.onmouseover = function() {
        paintedTile.classList.add("painted"); //onclick applies the class "painted" which changes the color of the block

    }

}

