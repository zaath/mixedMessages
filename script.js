function generateRandomNumber (number) {
    return Math.floor(Math.random() * number)
}

const footballData = {
    teams1: ["Arsenal", "Manchester City", "Manchester United", "Crystal Palace", "Leeds United"],
        /*
        {
        england: ["Arsenal", "Manchester City", "Manchester United", "Crystal Palace", "Leeds United"],
        france: ["PSG", "Olympique de Marseille", "Sochaux", "Lyon", "AS Monaco"],
        italy: ["Juventus Turin", "AC Milan", "Sassuolo", "Lazio Roma", "FC Bologna"]
        
        },
        */
    teams2: ["Juventus Turin", "AC Milan", "Sassuolo", "Lazio Roma", "FC Bologna"],
    stadiums: ["San Siro", "Parc des Princes", "Stade Vélodrome", "Bernabeu", "Westfalen Stadion"],
    vips: ["David Beckham", "Jay-Z & Beyonce", "Avril Lavigne", "Michael Jackson", "Prince", "Prince Charles"]
}

// generer a chaque fois un random number pour extraire de chacune des arrays la valeur
// creer une phrase avec la valeur en question pour mettre en contexte
// tout mettre ensemble et formatter

let selectedIdxs = [];

function createGame () {
    for (prop in footballData) {
        let propIdx = generateRandomNumber(footballData[prop].length)
        selectedIdxs.push((footballData[prop][propIdx]));
    }

    let theGame = {
        team1: selectedIdxs[0],
        team2: selectedIdxs[1],
        stadium: selectedIdxs[2],
        vip: selectedIdxs[3]
    } 
    
    console.log(`Bienvenue dans ce match entre ${theGame.team1} et ${theGame.team2} dans le magnifique ${theGame.stadium}! La tension est à son comble pour ce match si important, auquel assiste même des célébrités telles que ${theGame.vip}. C'est l'heure, que le meilleur gagne!`)
}

createGame();

/*

let gameObj = {
    team 1: "",
    team 2: "",
    stadium: "",
    vip: ""
}

*/

// populate arrays avec les 3 premieres propIdx. On aura besoin plus tard d'une 4e valeur pour la 2eme equipe. Populater ensuite un objet avec les noms decoulant des idx.