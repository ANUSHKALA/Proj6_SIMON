//alert("Click a key to start the a game");

var buttonColors = ['green','red','yellow','blue']

$("h1").click(function () { 
    console.log("hey");
});

function nextSequence(){
    var randomNumber = Math.round((Math.random())*3);
    var randomColor = buttonColors[randomNumber]
    $("."+randomColor).addClass("pressed");
    setTimeout(function(){
        $("."+randomColor).removeClass("pressed");
    },100)
    return randomColor;
}

var audio = new Audio("../Simon Game Challenge Starting Files/sounds/blue.mp3")