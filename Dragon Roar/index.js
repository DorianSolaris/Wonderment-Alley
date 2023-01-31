
var numOfDrum = document.querySelectorAll(".roar").length;

for (var i = 0; i < numOfDrum; i++) {
 document.querySelectorAll(".roar")[i].addEventListener("click", function () {
     var buttonInnerHTML = this.innerHTML;
     
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
        var tom1 = new Audio('sounds/1.Red.wav');
        tom1.play();
        break;

    case "p":
        var tom2 = new Audio("sounds/2.Pink.wav");
        tom2.play();
        break;
           
    case "y":
        var tom3 = new Audio('sounds/3.Gold.wav');
        tom3.play();
        break;
    case "g":
        var tom4 = new Audio('sounds/4.Green.wav');
        tom4.play();
        break;
    case "b":
        var crash = new Audio('sounds/5.Blue.wav');
            crash.play();
            break;
    case "v":
        var bass = new Audio('sounds/6.Violet.wav');
        bass.play();
        break;           
    case "w":
        var snare = new Audio('sounds/White.wav');
        snare.play();
        break;   
    case "n":
            var snare = new Audio('sounds/Black.wav');
            snare.play();
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