

var R1=localStorage.getItem("Team1score");
var R2=localStorage.getItem("Team2score");
var W1=localStorage.getItem("Team1wickets");
var W2=localStorage.getItem("Team2wickets");

//alert(R1,R2,W1,W2);

document.getElementById("t1score1").innerHTML=R1;
document.getElementById("t2score1").innerHTML=R2;
document.getElementById("t1wicket1").innerHTML=W1;
document.getElementById("t2wicket2").innerHTML=W2;


if(R1>R2){
	document.getElementById("winner").innerHTML='TEAM1 WINS BY'+R1-R2+'RUNS!';
}
else if(R1<R2){
	document.getElementById("winner").innerHTML='TEAM2 WINS BY'+R2-R1+'RUNS!';
}
else{
	document.getElementById("winner").innerHTML='IT IS A TIE!';
}
