//Runs fine for one image
const image1= document.querySelector(".symbol1");
var count=0;


function changeSymbol()
{
    var randomNumber = Math.floor(Math.random()*7)+1;
    image1.innerHTML=`<img src="img/${randomNumber}.jpg" alt="">`
}

setInterval(()=>{
    changeSymbol();
},1000)