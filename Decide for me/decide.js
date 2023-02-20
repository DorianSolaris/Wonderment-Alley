
let randomNumber1 = Math.floor(Math.random() * 7) + 1;
let randomNumber2 = Math.floor(Math.random()  +  1);


let input = document.querySelector("#input");
let button = document.querySelector(".btn");
button.disabled = true;



function fortuneTell() {
  document.querySelector(".btn").addEventListener("click", function () {
   
   let starsSign = document.querySelector(".img1").setAttribute("src", "images/Star" + randomNumber1 + ".png");
  $("h3").css({"color": "#9b59b6", "text-shadow": "2px 0 #ecf0f1"});
   if (randomNumber1 % 2 === 0 && randomNumber2 % 2 !== 0) {
    return document.querySelector("h3").innerHTML = "Do it! Or terrible things will happen.", 
    starsSign;
    } else if (randomNumber2 % 2 === 0 && randomNumber1 % 2 !== 0) {
    return document.querySelector("h3").innerHTML = "This choice will mark your fate, be careful.",
    starsSign; 
    }else {
    return document.querySelector("h3").innerHTML = "Your future is covered by a mist of many possibilities!",
    starsSign;
    }
});
}

fortuneTell()


input.addEventListener("change", stateHandle);

function stateHandle() {
    if(document.querySelector("#input").value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
  }



$("#old-btn").click(function () {
 $("#old-btn").remove();
 $(".buttons").before("<button class='btn' id='new-btn' onclick='pageReload()'>Do you want to ask next question.</button>");
$("#new-btn").click(function pageReload() {
  $(".sign").fadeOut();
  document.location.reload();
});

});





