var randomnumber1=Math.random();
randomnumber1=randomnumber1*7;
randomnumber1=Math.floor(randomnumber1);

var randomdiceImage="dice" +randomnumber1+".png";

var randomimagesource="images/" +randomdiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

var randomnumber2=Math.random();
randomnumber2=randomnumber2*7;
randomnumber2=Math.floor(randomnumber2);



var randomimagesource2="images/dice" +randomnumber2+".png";

var image1=document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins!!";
}
else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="player 2 wins!!";

}
else {
    document.querySelector("h1").innerHTML="Draw!!";

}