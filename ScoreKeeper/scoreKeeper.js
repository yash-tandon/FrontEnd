var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var a=document.querySelector("#a");
var b=document.querySelector("#b");
var r=document.querySelector("#r");
var i=document.querySelector("input");
var sc=document.querySelector("p span");

var ps1=0;
var ps2=0;
var f=false;
var winningScore=5;

p1.addEventListener("click", function(){
	if(!f){
		ps1++;
		if(ps1===winningScore)
		{
			a.classList.add("winner");
			f=true;
		}
	}
	a.textContent=ps1;
});

p2.addEventListener("click", function(){
	if(!f){
		ps2++;
		if(ps2===winningScore)
		{
			b.classList.add("winner");
			f=true;
		}
	}
	b.textContent=ps2;
});

r.addEventListener("click", function(){
	reset();
});

i.addEventListener("change", function(){
	sc.textContent=i.value;
	winningScore=Number(i.value);
	reset();
});

function reset(){
	ps1=0;
	a.textContent=ps1;
	ps2=0;
	b.textContent=ps2;
	f=false;
	a.classList.remove("winner");
	b.classList.remove("winner");
}