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
    stadiums: [
        {stadiumName:"San Siro", stadiumAff: "70.000"}, 
        {stadiumName:"Parc des Princes", stadiumAff: "45.000"}, 
        {stadiumName:"Velodrome", stadiumAff: "60.000"}, 
        {stadiumName:"Bernabeu", stadiumAff: "80.000"}, 
        {stadiumName:"Westfalen Stadion", stadiumAff: "88.000"}
    ],
    vips: ["David Beckham", "Jay-Z & Beyonce", "Avril Lavigne", "Michael Jackson", "Prince", "Prince Charles"]
}

console.log(Object.values(footballData.stadiums));

let selectedIdxs = [];

function createGame () {
    for (prop in footballData) {
        let propIdx = generateRandomNumber(footballData[prop].length)
        selectedIdxs.push((footballData[prop][propIdx]));
        console.log(propIdx, selectedIdxs)
    }

    let theGame = {
        team1: selectedIdxs[0],
        team2: selectedIdxs[1],
        stadiumName: selectedIdxs[2].stadiumName,
        stadiumAff: selectedIdxs[2].stadiumAff,
        vip: selectedIdxs[3]
    } 
    
    console.log(`Bienvenue dans ce match entre ${theGame.team1} et ${theGame.team2} dans le magnifique ${theGame.stadiumName}! ${theGame.stadiumAff} spectateurs sont attendus aujourd'hui. La tension est donc à son comble pour ce match si important, auquel assiste même des célébrités telles que ${theGame.vip}. C'est l'heure, que le meilleur gagne!`)
}

createGame();