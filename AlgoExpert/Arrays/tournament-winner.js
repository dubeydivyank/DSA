// O(n) time - where n is no of competitions
// O(k) space - where k is no of teams
function tournamentWinner(competitions, results) {
    let scores = {};
    let mostPoints = -Infinity;
    let winningTeam = "";
    for (let i = 0; i < results.length; i++) {
        if (results[i] == 0) {
            if (scores.hasOwnProperty(competitions[i][1])) {
                scores[competitions[i][1]] += 3;
            } else scores[competitions[i][1]] = 3;
        } else {
            if (scores.hasOwnProperty(competitions[i][0])) {
                scores[competitions[i][0]] += 3;
            } else scores[competitions[i][0]] = 3;
        }
    }
    for (const item in scores) {
        if (scores[item] > mostPoints) {
            mostPoints = scores[item];
            winningTeam = item;
        }
    }
    return winningTeam;
}

// O(n) time - where n is no of competitions
// O(k) space - where k is no of teams
function tournamentWinner(competitions, results) {
    let scores = {};
    let mostPoints = -Infinity;
    let winningTeam = "";
    for (let i = 0; i < results.length; i++) {
        if (results[i] == 0) {
            if (scores.hasOwnProperty(competitions[i][1])) {
                scores[competitions[i][1]] += 3;
            } else scores[competitions[i][1]] = 3;
        } else {
            if (scores.hasOwnProperty(competitions[i][0])) {
                scores[competitions[i][0]] += 3;
            } else scores[competitions[i][0]] = 3;
        }
        if (scores[competitions[i][0]] > mostPoints) {
            mostPoints = scores[competitions[i][0]];
            winningTeam = competitions[i][0];
        }
        if (scores[competitions[i][1]] > mostPoints) {
            mostPoints = scores[competitions[i][1]];
            winningTeam = competitions[i][1];
        }
    }
    return winningTeam;
}
