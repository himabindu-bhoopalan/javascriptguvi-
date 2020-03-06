function solve1(){
	//alert('team1');
	document.getElementById("Play2").disabled = true;
	var team1=Team1obj.play1();
}
function solve2(){
	//alert(Team1obj.score);
	var team2=Team2obj.play2();
}                           


class Team{
	constructor(balls,wickets,players,score){
		this.balls=balls;
		this.wickets=wickets;
		this.players=players;
		this.score=score;
	}
	
	play1(){
		let count=0;
		if(this.balls>0 && this.wickets<6 && this.players<=6){
			let runs=Math.floor(Math.random()*7);
			
			if(runs==0){
				this.score=this.score+runs;
				this.wickets=this.wickets+1;
				this.players=this.players+1;
				this.balls=this.balls-1;
				count=0;
				
			}
			else{
				this.score=this.score+runs;
				this.balls=this.balls-1;
				
				count=count+1;
				if(count==6){
					this.players=this.players+1;
					count=0;
				}
			}
		
		document.getElementById('player1').value= this.players;
		
		document.getElementById('wicket1').value=this.wickets;
		
		document.getElementById('score1').value=this.score;
		
		document.getElementById('balls1').value= this.balls;
		
		document.getElementById('runs1').value= runs;
		}
		
		
		
		
		else{
			//alert('Team 1 play is over');
			document.getElementById("Play1").disabled = true;
			document.getElementById("Play2").disabled = false;
			localStorage.setItem("Team1score",this.score);
			localStorage.setItem("Team1wickets",this.wickets);
			
		}
		
		
	}
	play2(){
		let count=0;
		if(this.balls>0 && this.wickets<6 && this.players<=6){
			let runs=Math.floor(Math.random()*7);
			
			if(runs==0){
				this.score=this.score+runs;
				this.wickets=this.wickets+1;
				this.players=this.players+1;
				this.balls=this.balls-1;
				count=0;
				
				
				
			}
			else{
				this.score=this.score+runs;
				this.balls=this.balls-1;
				
				count=count+1;
				if(count==6){
					this.players=this.players+1;
					count=0;
				}
			}
		if(this.players==7){
			var players1='Allout!';
		}	
		else{
		var players1=this.players;}
		document.getElementById('player2').value=players1;
		
		document.getElementById('wicket2').value=this.wickets;
		
		document.getElementById('score2').value=this.score;
		document.getElementById('balls2').value=this.balls;
		
		document.getElementById('runs2').value=runs;
		}
		
		
		else{
			
			//alert('Team 2 play is over');
		
			
			localStorage.setItem("Team2score",this.score);
			localStorage.setItem("Team2wickets",this.wickets);
			
			window.location.href = "cric2.html";
			
		}
	}
}
let Team1obj=new Team(36,0,1,0);
let Team2obj=new Team(36,0,1,0);