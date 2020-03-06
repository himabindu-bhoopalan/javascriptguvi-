function dis(val){
	document.getElementById('answer').value+=val;
}
function solve(){
	let str1=document.getElementById('answer').value
	console.log(str1[0],str1[1],str1[2]);
	var obj=new Calc(parseInt(str1[0]),parseInt(str1[2]));
	switch(str1[1]) {
	case '+':
		y=obj.add();
    break;
	case '-':
		y=obj.sub();
    
    break;
	case '*':
		y=obj.mul();
    
    break;
	case '/':
		y=obj.div();
    
    break;
	
	default:
		y='invalid';
	}
	document.getElementById('answer').value=y;

}

function clr(){
	document.getElementById('answer').value="";
	
}


class Calc{
	constructor (a,b) {
        this.a = a;
		this.b = b;
      }
	  
	add(){
	var c= this.a+this.b;
	return c;
	}
	sub(){
	var c= this.a-this.b;
	return c;
	}
	mul(){
	var c= this.a*this.b;
	return c;
	}
	div(){
	var c= this.a/this.b;
	return c;
	}
	
    }
//var obj = new Calc(4,5);
//console.log(obj.sub());
