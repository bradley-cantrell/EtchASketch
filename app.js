
for(i=0;i<256;i++){ //256 because we have a 16 x 16 grid, this could be set as a variable above provided by the user

    const sketchpad = document.querySelector('.sketchpad'); //selects the .sketchpad div that already exists

    const canvas = document.createElement('div') //creates a new <div> and assigns it to "canvas"
 
 
    canvas.classList.add("canvas"); //adds the class "canvas" to the new <div>
   
    canvas.style.minWidth = "30px";
    canvas.style.minHeight = "30px";
 
    sketchpad.appendChild(canvas); //appends the new div "canvas" to the existing div "sketchpad"

    
}

for(i=0;i<256;i++){

    const paintedTile = document.getElementsByClassName("canvas")[i];
    
    paintedTile.onmouseover = function() {
        paintedTile.classList.add("painted");

    }

}