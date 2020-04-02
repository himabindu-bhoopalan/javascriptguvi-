
function solve1() {
    //alert('team1');
    document.getElementById("Play2").disabled = true;
    var team1 = Team1obj.play();
}
function solve2() {
    //alert(Team1obj.score);
    var team2 = Team2obj.play();
}


class Team {
    constructor(balls, wickets, players, score, teamname) {
        this.balls = balls;
        this.wickets = wickets;
        this.players = players;
        this.score = score;
        this.teamname = teamname;
    }

    play() {
        let count = 0;
        if (this.balls > 0 && this.wickets < 6 && this.players <= 6) {
            let runs = Math.floor(Math.random() * 7);

            if (runs == 0) {
                this.score = this.score + runs;
                this.wickets = this.wickets + 1;
                this.players = this.players + 1;
                this.balls = this.balls - 1;
                count = 0;

            }
            else {
                this.score = this.score + runs;
                this.balls = this.balls - 1;

                count = count + 1;
                if (count == 6) {
                    this.players = this.players + 1;
                    count = 0;
                }
            }

            document.getElementById('player' + this.teamname).value = this.players;

            document.getElementById('wicket' + this.teamname).value = this.wickets;

            document.getElementById('score' + this.teamname).value = this.score;

            document.getElementById('balls' + this.teamname).value = this.balls;

            document.getElementById('runs' + this.teamname).value = runs;
        }




        else {
            //alert('Team 1 play is over');
            document.getElementById("Play1").disabled = true;
            document.getElementById("Play2").disabled = false;
            if (this.teamname == 1) {
                var count2 = 1;
                localStorage.setItem("Team1score", this.score);
                localStorage.setItem("Team1wickets", this.wickets);
            }
            else {
                var count2 = 2;
                localStorage.setItem("Team2score", this.score);
                localStorage.setItem("Team2wickets",this.wickets);
                window.location.href = "cricpage2.html";
            }




        }


    }


}


let Team1obj = new Team(36, 0, 1, 0, 1);
let Team2obj = new Team(36, 0, 1, 0, 2);