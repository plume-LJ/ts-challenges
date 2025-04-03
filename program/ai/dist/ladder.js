var Team = /** @class */ (function () {
    function Team(name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.points = 0;
        this.goalDifference = 0;
    }
    return Team;
}());
var Match = /** @class */ (function () {
    function Match(team1, team2, score1, score2) {
        this.team1 = team1;
        this.team2 = team2;
        this.score1 = score1;
        this.score2 = score2;
    }
    return Match;
}());
var CompetitionLadder = /** @class */ (function () {
    function CompetitionLadder() {
        this.teams = new Map();
        this.matches = [];
    }
    CompetitionLadder.prototype.addTeam = function (name) {
        if (!this.teams.has(name)) {
            this.teams.set(name, new Team(name));
        }
    };
    CompetitionLadder.prototype.addMatch = function (team1, team2, score1, score2) {
        if (this.teams.has(team1) && this.teams.has(team2)) {
            var match = new Match(this.teams.get(team1), this.teams.get(team2), score1, score2);
            this.matches.push(match);
            this.updateLadder(match);
        }
    };
    CompetitionLadder.prototype.updateLadder = function (match) {
        var team1 = match.team1;
        var team2 = match.team2;
        var score1 = match.score1;
        var score2 = match.score2;
        if (score1 > score2) {
            team1.wins++;
            team2.losses++;
            team1.points += 3;
        }
        else if (score2 > score1) {
            team2.wins++;
            team1.losses++;
            team2.points += 3;
        }
        else {
            team1.draws++;
            team2.draws++;
            team1.points++;
            team2.points++;
        }
        team1.goalDifference += score1 - score2;
        team2.goalDifference += score2 - score1;
    };
    CompetitionLadder.prototype.printLadder = function () {
        var sortedTeams = Array.from(this.teams.values()).sort(function (a, b) {
            if (a.points !== b.points) {
                return b.points - a.points;
            }
            else if (a.goalDifference !== b.goalDifference) {
                return b.goalDifference - a.goalDifference;
            }
            else {
                return a.name.localeCompare(b.name);
            }
        });
        console.log("Ladder:");
        console.log("=======");
        console.log("Pos\tTeam\t\tWins\tLosses\tDraws\tPoints\tGD");
        sortedTeams.forEach(function (team, index) {
            console.log(index + 1 + "\t" + team.name + "\t\t" + team.wins + "\t" + team.losses + "\t" + team.draws + "\t" + team.points + "\t" + team.goalDifference);
        });
    };
    return CompetitionLadder;
}());
var ladder = new CompetitionLadder();
ladder.addTeam("A");
ladder.addTeam("B");
ladder.addTeam("C");
ladder.addTeam("D");
ladder.addMatch("A", "B", 2, 1);
ladder.addMatch("A", "C", 3, 3);
ladder.addMatch("B", "C", 1, 2);
ladder.addMatch("C", "A", 0, 2);
ladder.addMatch("C", "D", 1, 0);
ladder.printLadder();
