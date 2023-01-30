
var randomNumber1 = Math.floor(Math.random() * 7) + 1;
var randomNumber2 = Math.floor(Math.random()  +  1);



function fortuneTell() {
  document.querySelector(".btn").addEventListener("click", function () {
   
   var starsSign = document.querySelector(".img1").setAttribute("src", "images/Star" + randomNumber1 + ".png");
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




$("#old-btn").click(function () {
 $("#old-btn").remove();
 $(".buttons").before("<button class='btn' id='new-btn' onclick='pageReload()'>You can ask next question.</button>");
});



function pageReload() {
  $(".sign").fadeOut();
  document.location.reload();
};

 

