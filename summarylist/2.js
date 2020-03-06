var div1 = document.createElement("div");
var div2 = document.createElement("div");
document.body.appendChild(div1);
document.body.appendChild(div2);
div1.textContent='I am div 1!!'
div2.textContent='I am div 2!!'
//div1.id='div1';
//div2.id='div2';
var btn = document.createElement("button");
btn.textContent="click to swap"
document.body.appendChild(btn);

//var element = document.getElementById("div1");
btn.addEventListener("click",changetext);

function changetext(){
	//temp=div1.textContent;
	//div1.textContent=div2.textContent;
	//div2.textContent=temp;
	let a =div1.textContent;
	let b=div2.textContent;
	div1.textContent=b;
	div2.textContent=a;
	}

//element.appendChild(para);