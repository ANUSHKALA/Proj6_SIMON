//alert("Click a key to start the a game");

var buttonColors = ['green','red','yellow','blue'];
var buttonSequence = [];
var userButtonSequence = [];
var level = 0;

$("h1").click(function () { 
    console.log("hey");
});

function nextSequence(){
    $("h1").text("Level "+level);
    level++;
    var randomNumber = Math.round((Math.random())*3);
    var randomColor = buttonColors[randomNumber]
    flashButton("."+randomColor);
    playSound(randomColor);
    var chosenColor = $("."+randomColor).attr('id');
    buttonSequence.push(chosenColor);
    console.log(buttonSequence.length)

    return buttonSequence;
}

function flashButton(button){
    $(button).addClass("pressed");
    setTimeout(function(){
        $(button).removeClass("pressed");
    },100);
}


function playSound(color){

    switch(color){
        case "red": 
            var audio = new Audio("../Simon Game Challenge Starting Files/sounds/red.mp3");
            audio.play();
        break;
        case "yellow": 
            var audio = new Audio("../Simon Game Challenge Starting Files/sounds/yellow.mp3");
            audio.play();
        break;
        case "green": 
            var audio = new Audio("../Simon Game Challenge Starting Files/sounds/green.mp3");
            audio.play();
        break;
        case "blue": 
            var audio = new Audio("../Simon Game Challenge Starting Files/sounds/blue.mp3");
            audio.play();
        break;
    }

}


function handleClick(currentButton) {
    
 }

$(".btn").click(function () {
    var clickedButton = this.id;
    flashButton("."+clickedButton);
    playSound(clickedButton);
    userButtonSequence.push(clickedButton);

    console.log(userButtonSequence);
    console.log(buttonSequence);
});



$(document).one('keydown',function (e) { 
    nextSequence();
});



for(let i = 0;i<buttonSequence.length;i++){
    if(buttonSequence[i] == userButtonSequence[i]){
        nextSequence();
    }
}