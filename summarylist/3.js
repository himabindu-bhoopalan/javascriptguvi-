var div1 = document.createElement("div");

document.body.appendChild(div1);
div1.textContent='USER LOGIN';

var div2 = document.createElement("div");
document.body.appendChild(div2);
div2.textContent='Enter Email ID or Phone no.:'
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.placeholder="Username";
x.id="email";
div2.appendChild(x);

var div3 = document.createElement("div");
div3.textContent='Enter Password:'
document.body.appendChild(div3);
var y = document.createElement("INPUT");
y.setAttribute("type", "password");
y.placeholder="Password";
y.id="password";
div3.appendChild(y);


var div4 = document.createElement("div4");
document.body.appendChild(div4);
var btn = document.createElement("button");
btn.textContent="SIGN IN";
div4.appendChild(btn);

btn.addEventListener("click",validate);
function validate(){
	
	let pat1=/.com/i;
	let pat2=/@/;
	
	let pat4=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	let email=document.getElementById("email").value;  //when this get stmt is used outside validate it does not give any value ..why??
	let password1=document.getElementById("password").value; //well this is not showing any value when i put it in alert....why??
	if((pat1.test(email) && pat2.test(email)||email.length==10 && typeof(parseInt(email))=='number')  && pat4.test(password1.charAt(password1.length-1))&& password1.length>=8){
			alert("logged in!");
	}
	else{
		alert('invalid email id or password');
	}
	
	
	
}



