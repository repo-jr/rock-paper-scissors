function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3); // 0, 1, 2
    let choiceStr; 

    switch (choice) 
    {
        case 0: 
            choiceStr = "Rock";
            break;
        case 1:
            choiceStr = "Paper";
            break;
        case 2:
            choiceStr = "Scissors";
            break;
    }

    return choiceStr; 
}

function getHumanChoice()
{
    let humanChoice = prompt("Rock, paper, or scissors?");

    // Make sure capitalization is 1 upper case then all lower case 
    let firstLetter = humanChoice.substring(0, 1);
    let lastLetters = humanChoice.substring(1, humanChoice.length);
    let humanChoice1 = firstLetter.toUpperCase() + lastLetters.toLowerCase();

    switch (humanChoice1)
    {
        case "Rock":
            return humanChoice1;
        case "Paper":
            return humanChoice1;
        case "Scissors":
            return humanChoice1;
        default:
            console.log("Please enter valid choice.");
            return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound()
{
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice(); 
    switch(humanChoice) 
    {
        case "Rock":
            switch(computerChoice)
            {
                case "Rock":
                    break;
                case "Paper":
                    computerScore++; // computer wins!
                    break; 
                case "Scissors":
                    humanScore++; // human wins!
                    break;
                default:
                    return; 
            }
            break;
        case "Paper":
            switch(computerChoice)
            {
                case "Rock":
                    humanScore++; // human wins!
                    break;
                case "Paper":
                    break; 
                case "Scissors":
                    computerScore++; // computer wins!
                    break;
                default:
                    return; 
            }
            break;
        case "Scissors":
            switch(computerChoice)
            {
                case "Rock":
                    computerScore++; // computer wins!
                    break;
                case "Paper":
                    humanScore++; // human wins!
                    break; 
                case "Scissors":
                    break;
                default:
                    return; 
            }
            break;
        default:
            return; 
    }
}





