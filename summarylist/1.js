var div1 = document.createElement("div");
document.body.appendChild(div1);
div1.textContent='Hover here!!'


div1.addEventListener("mouseover",changecolor);
div1.addEventListener("mouseout",changecolor1);
function changecolor(){
	div1.style.color="red";
	}
function changecolor1(){
	div1.style.color="black";

}
