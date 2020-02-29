var n=6;
var colors=generateRandomColors(n);
var box=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
	n=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	reset();
});

hardBtn.addEventListener("click", function(){
	n=6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	reset();
});

resetButton.addEventListener("click",function(){
	reset();
});

colorDisplay.textContent = pickedColor;

for(var i=0 ; i<n ; i++){
	box[i].style.backgroundColor = colors[i];
	box[i].addEventListener("click", function(){
		if(this.style.backgroundColor===pickedColor){
			message.textContent="Correct!";
			changeColors(pickedColor);
			resetButton.textContent="Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent="Try again";
		}
	});
}

function changeColors(color){
	for(var i=0; i<n;i++)
	{
		box[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=color;
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];

	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

function reset(){
	colors=generateRandomColors(n);
	pickedColor=pickColor();
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<n;i++)
	{
		box[i].style.backgroundColor=colors[i];
		box[i].style.display="block"
	}
	for(;i<6;i++)
	{
		box[i].style.display="none";
	}
	resetButton.textContent="New Colors";
	message.textContent=" ";
}