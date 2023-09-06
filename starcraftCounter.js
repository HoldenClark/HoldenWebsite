let totalGameCount = document.getElementById("totalGameCount2")
let winLossRatio = document.getElementById("winLossRatio")
let countWins = 0
let countLosses = 0
let overallCount = 0

let protossGameCount = document.getElementById("winLossRatioProtoss1")
let terranGameCount = document.getElementById("winLossRatioTerran1")
let zergGameCount = document.getElementById("winLossRatioZerg1")

let protossWinCount = 0
let protossLossCount = 0
let terranWinCount = 0
let terranLossCount = 0
let zergWinCount = 0
let zergLossCount = 0

let protoss = false
let terran = false
let zerg = false

function incrementWin() {
      
    if (protoss) {
        protossWinCount += 1
        countWins += 1
        incrementAllGames()
    }
    else if (terran) {
        terranWinCount += 1
        countWins += 1
        incrementAllGames()
    }
    else if (zerg) {
        zergWinCount += 1
        countWins += 1
        incrementAllGames()
    }
    
}

function incrementLoss() {
    
    if (protoss) {
        protossLossCount += 1
        countLosses += 1 
        incrementAllGames()
    }
    else if (terran) {
        terranLossCount += 1
        countLosses += 1 
        incrementAllGames()
    }
    else if (zerg) {
        zergLossCount += 1
        countLosses += 1 
        incrementAllGames()
    }
    
}

function incrementAllGames() {
    incrementTotalGames()
    incrementProtossGames()
    incrementTerranGames()
    incrementZergGames()
}

function incrementTotalGames() {
    overallCount += 1
    totalGameCount.textContent = overallCount
    winLossRatio.textContent = countWins + " / " + countLosses
}

function incrementProtossGames() {
    protossGameCount.textContent = protossWinCount + " / " + protossLossCount
}

function incrementTerranGames() {
    terranGameCount.textContent = terranWinCount + " / " + terranLossCount
}

function incrementZergGames() {
    zergGameCount.textContent = zergWinCount + " / " + zergLossCount
}

function changeBackgroundP() {
    //document.body.style.backgroundImage = "url('protoss.png')";
    protoss = true;
    zerg = false;
    terran = false;
    var button = document.querySelector('#protoss');
    changeBorderColorSelected(button);
    button = document.querySelector('#terran');
    changeBorderColorUnselected(button);
    button = document.querySelector('#zerg');
    changeBorderColorUnselected(button);
}

function changeBackgroundT() {
    //document.body.style.backgroundImage = "url('terran.png')";
    terran = true;
    zerg = false;
    protoss = false;
    var button = document.querySelector('#terran');
    changeBorderColorSelected(button);
    button = document.querySelector('#protoss');
    changeBorderColorUnselected(button);
    button = document.querySelector('#zerg');
    changeBorderColorUnselected(button);
}

function changeBackgroundZ() {
    //document.body.style.backgroundImage = "url('zerg.png')";
    zerg = true;
    terran = false;
    protoss = false;
    var button = document.querySelector('#zerg');
    changeBorderColorSelected(button);
    button = document.querySelector('#terran');
    changeBorderColorUnselected(button);
    button = document.querySelector('#protoss');
    changeBorderColorUnselected(button);
    
}

function reset() {
    countWins = 0
    countLosses = 0
    overallCount = -1
    protossWinCount = 0
    protossLossCount = 0
    terranWinCount = 0
    terranLossCount = 0
    zergWinCount = 0
    zergLossCount = 0

    zerg = false;
    terran = false;
    protoss = false;

    button = document.querySelector('#protoss');
    changeBorderColorUnselected(button);
    button = document.querySelector('#zerg');
    changeBorderColorUnselected(button);
    button = document.querySelector('#terran');
    changeBorderColorUnselected(button);

    incrementAllGames();
}

function changeBorderColorSelected(button) {
    button.style.borderColor = "lightblue";
  }

function changeBorderColorUnselected(button) {
    button.style.borderColor = "black";
  }  

function save() {

}

function load() {

}