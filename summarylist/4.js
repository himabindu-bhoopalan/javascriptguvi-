var div1 = document.createElement("div");
document.body.appendChild(div1);
div1.id=='div1';
div1.align="center";
var imgary=["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

var img1 = document.createElement("img");
img1.src=imgary[0];
img1.id="img1";
img1.style.width="400px";
img1.style.height="279px";

div1.appendChild(img1);
var i=0;
//img1.display="block";
//img1.marginLeft="auto";
//img1.marginRight="auto";



document.getElementById("img1").onmouseover = function(){imageChange()};
function imageChange() {
	
	i=i+1;
	i=i%imgary.length;
	document.getElementById("img1").src =imgary[i];
}