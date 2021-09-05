
function showSelectBox(speed){
    selectBox.classList.remove("Hidden");
    selectBox.style.transitionDuration = "500ms";
    selectBox.classList.add("Show");
}

function hideSelectBox(speed){
    selectBox.classList.remove("Show");
    selectBox.classList.add("Hidden");
}

function newBoxClicked(currentBox, index, fasterSpeed, lowerSpeed){
    
    let currentBoxTranslateX = `${moveLeft * index}`;
   
    // When the first box is clicked the transition duration is set to the fast
    // speed and moves the box down in 0.5s.  
    if (index === 0){
        currentBox.classList.add("moved");
        currentBox.style.transitionDuration = `${fasterSpeed}ms`;
        currentBox.style.transform = `translateY(${moveDown})`;
        
        setTimeout(function(){
            cl("Select Across")
            showSelectBox();
        }, (fasterSpeed));

    // When a new box is clicked and is not the first box
    } else if (index !== 0) {
        currentBox.classList.add("moved");
        currentBox.style.transitionDuration = `${lowerSpeed}ms`;
        currentBox.style.transform = `translateY(${moveDown})`;
        console.log("Box Down")
        currentBox.style.transitionDuration = `${fasterSpeed}ms`;

        setTimeout(function(){
            console.log("Box Across")
            currentBox.style.transform = `translateY(${moveDown}) translateX(-${currentBoxTranslateX}px)`;
            
            setTimeout(function(){
                cl("Select Across")
                showSelectBox();
            }, (switchDelay));

        }, (fasterSpeed));
        
    } 
};

function sameBoxReturn(currentBox, index, fasterSpeed, lowerSpeed){
    
    if (index != 0){
        currentBox.classList.remove("moved");
        hideSelectBox(fasterSpeed);
        currentBox.style.transform = `translateX(0px) translateY(${moveDown})`;
        
        setTimeout(function(){
            currentBox.style.transform = `translateY(0)`;
        }, (fasterSpeed));

    } else {
        hideSelectBox(fasterSpeed);

        setTimeout(function(){
            currentBox.style.transitionDuration = `${fasterSpeed}ms`;
            currentBox.style.transform = `translateY(0)`;
            currentBox.classList.remove("moved");
        }, (fasterSpeed));
    }
};
