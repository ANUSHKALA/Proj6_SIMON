//alert("Click a key to start the a game");

var buttonColors = ['green','red','yellow','blue'];
var buttonSequence = [];
var userButtonSequence = [];
var gameStarted = false;


var level = 0;
var result;

$("h1").click(function () { 
    console.log("hey");
});

function nextSequence(){
    userButtonSequence = [];
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

    checkClick(userButtonSequence.length-1);



function checkClick(currentLevel){
    if(buttonSequence[currentLevel] == userButtonSequence[currentLevel]){

        if(buttonSequence.length === userButtonSequence.length){
            console.log(buttonSequence.length)
            setTimeout(function () {
                nextSequence();
            }, 600);
        } 
    }

    else{
        console.log("fail");
        result = 'fail';
        var aud = new Audio("../Simon Game Challenge Starting Files/sounds/wrong.mp3")
        aud.play()
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
            $("h1").text("Game Over, Press Any Key to Restart");
        },200);
        gameOver();

    }  
}
    


});


if(!gameStarted){
    $(document).keydown(function () { 
        nextSequence();
        gameStarted = true;
    });
}


function gameOver() {
    level = 0;
    gameStarted = false;
    buttonSequence = [];
}