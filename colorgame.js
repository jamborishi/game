var numsquares=6;
var colors=generaterandomcolor(numsquares);
var colorpicked=pickcolor();
var squares=document.querySelectorAll(".square");
var colordisplay=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#message")
var reset=document.querySelector("#reset");
colordisplay.textContent=colorpicked;
var h1=document.querySelector("h1");
var Easybtn=document.querySelector("#Easy");
var Hardbtn=document.querySelector("#Hard");
reset.addEventListener("click",function()
{
this.textContent="New colors";
colors=generaterandomcolor(numsquares);
colorpicked=pickcolor();
colordisplay.textContent=colorpicked;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[i];
     // squares[i].style.display="block";
}
h1.style.background="steelblue";
messagedisplay.textContent="";
});
Easybtn.addEventListener("click",function()
{
Easybtn.classList.add("selected");
Hardbtn.classList.remove("selected");
numsquares=3;
colors=generaterandomcolor(numsquares);
colorpicked=pickcolor();
colordisplay.textContent=colorpicked;
for (var i = 0; i < squares.length; i++) {
    if(colors[i])
    {
    squares[i].style.backgroundColor=colors[i];
}
else
{
    squares[i].style.display="none";
}
}
h1.style.background="#232323";
messagedisplay.textContent="";
});
Hardbtn.addEventListener("click",function()
{
Easybtn.classList.remove("selected");
Hardbtn.classList.add("selected");
numsquares=6;
colors=generaterandomcolor(numsquares);
colorpicked=pickcolor();
colordisplay.textContent=colorpicked;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor=colors[i];
     squares[i].style.display="block";
}
h1.style.background="#232323";
messagedisplay.textContent="";
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
}
for (var i = 0; i < squares.length; i++) {
	 squares[i].addEventListener("click", function(){
     // alert(this.style.backgroundColor);
    var clickedColor=this.style.backgroundColor;	
    // console.log(clickedColosr,colorpicked);
    if(clickedColor===colorpicked){
    	colorchange(clickedColor);
    	 h1.style.background=clickedColor;
         reset.textContent="Play Again";
    	 messagedisplay.textContent="Correct";
    } 
    else
    {
    	this.style.backgroundColor="#232323";
        messagedisplay.textContent="TryAgain";
    }
    
    });
}
function colorchange(color)
{
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor()
{
var rand=Math.floor(Math.random()*colors.length);
return colors[rand];
}
function generaterandomcolor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
     arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random()*256); //Note: random color will generate from 0 to 255, for that we include 256 
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
} 