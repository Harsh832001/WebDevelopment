//document.querySelectorAll("button").addEventListener("click",colorChange)

var color = 'blue'

function colorChange(){
    var button = document.querySelector("button");
    console.log("I got clicked");
    document.body.style.backgroundColor= color;
}

