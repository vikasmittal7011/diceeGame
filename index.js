if (performance.navigation.type == performance.navigation.TYPE_RELOAD){
var playre1 = Math.round(Math.random() * 5 + 1);
var playre2 = Math.round(Math.random() * 5 + 1);
if(playre1 == playre2){
    document.getElementById("main").innerHTML = "Draw";
    document.getElementById("player-1").src = "Images/dice" + playre1 + ".png";
    document.getElementById("player-2").src = "Images/dice" + playre2 + ".png";
}
else if(playre1 > playre2){
    document.getElementById("main").innerHTML = "🚩 Player 1 Win!";
    document.getElementById("player-1").src = "Images/dice" + playre1 + ".png";
    document.getElementById("player-2").src = "Images/dice" + playre2 + ".png";
}
else{
    document.getElementById("main").innerHTML = "Player 2 Win! 🚩";
    document.getElementById("player-1").src = "Images/dice" + playre1 + ".png";
    document.getElementById("player-2").src = "Images/dice" + playre2 + ".png";
}
}