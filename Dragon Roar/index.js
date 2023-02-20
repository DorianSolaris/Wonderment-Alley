
let numOfDrum = document.querySelectorAll(".roar").length;

for (var i = 0; i < numOfDrum; i++) {
 document.querySelectorAll(".roar")[i].addEventListener("click", function () {
     let buttonInnerHTML = this.innerHTML;
     
     makeSound(buttonInnerHTML);
    
     buttonAnimation(buttonInnerHTML); 
});

}


document.addEventListener("keypress", function (event) {
    
    makeSound(event.key);
   
    buttonAnimation(event.key);
});

function makeSound (keyUse) {


    switch (keyUse) {

    case "r":
        let tom1 = new Audio('sounds/1.Red.wav');
        tom1.play();
        break;

    case "p":
        let tom2 = new Audio("sounds/2.Pink.wav");
        tom2.play();
        break;
           
    case "y":
        let tom3 = new Audio('sounds/3.Gold.wav');
        tom3.play();
        break;
    case "g":
        let tom4 = new Audio('sounds/4.Green.wav');
        tom4.play();
        break;
    case "b":
        let crash = new Audio('sounds/5.Blue.wav');
            crash.play();
            break;
    case "v":
        let bass = new Audio('sounds/6.Violet.wav');
        bass.play();
        break;           
    case "w":
      let snare = new Audio('sounds/White.wav');
        snare.play();
        break;   
    case "n":
           let grr = new Audio('sounds/Black.wav');
            grr.play();
            break;   
                                
        
    default: console.log(key);
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
   
    activeButton.classList.add("pressed");
    
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 300);
}
