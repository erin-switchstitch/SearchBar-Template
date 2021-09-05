const targetBoxes = document.getElementsByClassName("box");
const selectBox = document.getElementById("selectBoxID");


let moveLeft = window.innerWidth / (targetBoxes.length);
let moveDown = "10vh"; 

let alreadyMoved = false;


for (let i=0; i < targetBoxes.length; i++){
    const currentBox = targetBoxes[i];
    //cl(currentBox);

    currentBox.addEventListener("click", function(){
        
        // The code below adds the class "moved" to the box which has been clicked. It then sets the duration
        // as well as the custom translateX amount as well as the standard translateY amount. It relies on 
        // a setTimeout function to do this. 
        cl(currentBox.classList.contains("moved"));
        cl(currentBox);
        
        // translateX amount is based on the index number of the box clicked 
        let currentBoxTranslateX = `${moveLeft * i}`;
        
        // if (currentBox.classList.contains("moved") === false){
        if (alreadyMoved === false){
            currentBox.classList.add("moved");
            currentBox.style.transitionDuration = "1000ms";
            currentBox.style.transform = `translateY(${moveDown})`;
            alreadyMoved = true;

            if (i !== 0) {
                setTimeout(function(){
                    // We use both translateX and Y here or the original translateY will reset 
                    currentBox.style.transform = `translateY(${moveDown}) translateX(-${currentBoxTranslateX}px)`;
                    
                    setTimeout(function(){
                        selectBox.classList.remove("Hidden");
                        selectBox.style.transitionDuration = "1000ms";
                        selectBox.classList.add("Show");
                    }, 500);
                }, 1000);
            } else {
                setTimeout(function(){ 
                    selectBox.classList.remove("Hidden");
                    selectBox.classList.add("Show");
                }, 500);
            }
            

            
        } else if (alreadyMoved === true){
            
            currentBox.classList.remove("moved");
            selectBox.classList.remove("Show");
            selectBox.classList.add("Hidden");
            setTimeout(function(){
                currentBox.style.transform = `translateX(0px) translateY(${moveDown})`;
            }, 500);
            setTimeout(function(){
                currentBox.style.transform = `translateY(0)`;
            }, 1520);
            alreadyMoved = false;
            // currentBox.style.transform = `translateX(${currentBoxTranslateX})`;
            // setTimeout(function(){
            //     cl("TIMEOUT")
            //     // We use both translateX and Y here or the original translateY will rest 
            //     // currentBox.style.transform = `translateY(-${moveDown}) translateX(${currentBoxTranslateX}px)`;
            //     currentBox.style.transform = `translateY(-${moveDown}) translateX(0px)`;
            //     currentBox.classList.remove("moved");
            //     cl(currentBox.classList.contains("moved"));
            // }, 1000);
        }

        

        cl(currentBox.classList.contains("moved"));
    })
};