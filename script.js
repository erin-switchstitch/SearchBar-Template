const cl = console.log;

const selectBox = document.getElementById("selectBoxID");
const targetBoxes = document.getElementsByClassName("box");

const moveLeft = window.innerWidth / (targetBoxes.length);
const moveDown = "10vh"; 
const move1speed = 500;
const move2speed = 1000;

let alreadyMoved = false;
let currentMovedIndex = -1; 

for (let i=0; i < targetBoxes.length; i++){
    const currentBox = targetBoxes[i];

    currentBox.addEventListener("click", function(){
        cl(currentBox);
        cl(currentMovedIndex);

        // First box clicked
        if ((alreadyMoved === false) && (currentMovedIndex <0)) {
            cl("First box clicked");
            newBoxClicked(currentBox, i, move1speed, move2speed);
            showSelectBox(move2speed);
            alreadyMoved = true; 
            currentMovedIndex = i ; 

        // Same box returned
        } else if ((alreadyMoved === true) && (currentMovedIndex === i)) {
            cl("Same box returned");
            sameBoxReturn(currentBox, currentMovedIndex, move1speed, move2speed);
            alreadyMoved = false; 
            currentMovedIndex = -1 ;

        // Different Boxes Switch > Greater
        } else if ((alreadyMoved === true) && ( i > currentMovedIndex)) {
            cl("Diff Box Switch > Greater");
            cl(currentBox);
            sameBoxReturn(targetBoxes[currentMovedIndex], currentMovedIndex, move1speed, move2speed);
            newBoxClicked(currentBox, i, move1speed, move2speed);
            alreadyMoved = true; 
            currentMovedIndex = i ; 

        // Different boxes switch < Less Than 
        } else if (((alreadyMoved === true) && ( i < currentMovedIndex) && (i != -1))){
            cl("Diff Box Switch < LessThan");
            cl(currentBox);
            sameBoxReturn(targetBoxes[currentMovedIndex], currentMovedIndex, move1speed, move2speed);
            newBoxClicked(currentBox, i, move1speed, move2speed);
            alreadyMoved = true; 
            currentMovedIndex = i ; 
        }    

        cl(currentMovedIndex);
        cl(alreadyMoved)
    });
};

function showSelectBox(speed){
    setTimeout(function(){
        selectBox.classList.remove("Hidden");
        // selectBox.style.transitionDuration = "1000ms";
        selectBox.classList.add("Show");
    }, speed);
}

function hideSelectBox(speed){
    setTimeout(function(){
        selectBox.classList.remove("Show");
        selectBox.classList.add("Hidden");
    }, speed);
}

function newBoxClicked(currentBox, index, fasterSpeed, lowerSpeed){
    let currentBoxTranslateX = `${moveLeft * index}`;
    currentBox.classList.add("moved");
    currentBox.style.transitionDuration = `${lowerSpeed}ms`;
    currentBox.style.transform = `translateY(${moveDown})`;
    currentBox.style.transitionDuration = `${fasterSpeed}ms`;
    
    if (index !== 0) {
        setTimeout(function(){
            // We use both translateX and Y here or the original translateY will reset 
            currentBox.style.transform = `translateY(${moveDown}) translateX(-${currentBoxTranslateX}px)`;
        }, (fasterSpeed));
        showSelectBox();
    } else {
        showSelectBox();
    }
};

function sameBoxReturn(currentBox, index, fasterSpeed, lowerSpeed){
    currentBox.classList.remove("moved");
    let currentBoxTranslateX = `${moveLeft * index}`;
    
    setTimeout(function(){
        currentBox.style.transform = `translateX(0px) translateY(${moveDown})`;
    }, fasterSpeed);
    
    hideSelectBox(fasterSpeed);
    
    setTimeout(function(){
        currentBox.style.transform = `translateY(0)`;
    }, (fasterSpeed + fasterSpeed));
};

function diffBoxSwap(currentBox, currentIndex, previousBox, previousIndex){
    sameBoxReturn(previousBox, previousIndex);
    currentBox.classList.remove("moved");
    hideSelectBox();

    setTimeout(function(){
        currentBox.style.transform = `translateX(0px) translateY(${moveDown})`;
    }, 500);
    setTimeout(function(){
        currentBox.style.transform = `translateY(0)`;
    }, 1520);
};