const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");
const turns = document.getElementById("roll");
const totalscore = document.getElementById("score");

const loser = document.getElementById("loser");
const winner = document.getElementById("winner");

const rollButton = document.getElementById("dice-roll");

let roll = 0;
let score = 0;

dice1.style.display = "none";
dice2.style.display = "none";
dice3.style.display = "none";
dice4.style.display = "none";
dice5.style.display = "none";
dice6.style.display = "none";
winner.style.display = "none";
loser.style.display = "none";
 
rollButton.addEventListener("click", () => {
    roll = Math.floor((Math.random() * 6) + 1);
        if (roll === 1) {
            loser.style.display = "block";   
            score = 0
            rollButton.textContent = "Play again?"
        }
        else {
            loser.style.display = "none"
            score += roll;
            rollButton.textContent = "Roll"
        }

        document.getElementById("roll").innerHTML = roll;
        document.getElementById("score").innerHTML = score;

        if (score >= 20) {
            winner.style.display = "block";
            rollButton.textContent = "Restart"
            score = 0
        }
        else {
            winner.style.display = "none";
        }

        switch(true) {
            case (roll == 1):
                dice1.style.display = "block";
                dice2.style.display = "none";
                dice3.style.display = "none";
                dice4.style.display = "none";
                dice5.style.display = "none";
                dice6.style.display = "none";
                break;
            case (roll == 2):
                dice1.style.display = "none";
                dice2.style.display = "block";
                dice3.style.display = "none";
                dice4.style.display = "none";
                dice5.style.display = "none";
                dice6.style.display = "none";
                break;
            case (roll == 3): 
                dice1.style.display = "none";
                dice2.style.display = "none";
                dice3.style.display = "block";
                dice4.style.display = "none";
                dice5.style.display = "none";
                dice6.style.display = "none";
                break;
            case (roll == 4):
                dice1.style.display = "none";
                dice2.style.display = "none";
                dice3.style.display = "none";
                dice4.style.display = "block";
                dice5.style.display = "none";
                dice6.style.display = "none";
                break;
            case (roll == 5): 
                dice1.style.display = "none";
                dice2.style.display = "none";
                dice3.style.display = "none";
                dice4.style.display = "none";
                dice5.style.display = "block";
                dice6.style.display = "none";
                break;
            case (roll == 6):
                dice1.style.display = "none";
                dice2.style.display = "none";
                dice3.style.display = "none";
                dice4.style.display = "none";
                dice5.style.display = "none";
                dice6.style.display = "block";
                break;
            default:
                dice1.style.display = "none";
                dice2.style.display = "none";
                dice3.style.display = "none";
                dice4.style.display = "none";
                dice5.style.display = "none";
                dice6.style.display = "none";
                break;
        }

})