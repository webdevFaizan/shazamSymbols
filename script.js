//Does not run for multiple images.

var randomImage=null;
console.log("Hello");
var count=0;

function changeSymbol()
{
    var randomNumber = Math.floor(Math.random()*7)+1;
    randomImage= document.querySelector(`.symbol${randomNumber}`);
    var num = Math.floor(Math.random()*7)+1;
    randomImage.innerHTML=`<img src="img/${num}.jpg" height = 120px width= 120px alt="">`
}


setInterval(()=>{
    changeSymbol();
} ,5)