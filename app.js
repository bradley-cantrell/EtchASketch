i=0
for(i=0;i<16;i++){

    const sketchpad = document.querySelector('.sketchpad'); //selects the .sketchpad div that already exists

    const canvas = document.createElement('div') //creates a new <div> and assigns it to "canvas"
 
 
    canvas.classList.add("canvas"); //adds the class "canvas" to the new <div>
   
    canvas.textContent = "this is the canvas"; //adds the text "this is the canvas" to the new <div>
 
    sketchpad.appendChild(canvas); //appends the new div "canvas" to the existing div "sketchpad"
}
   