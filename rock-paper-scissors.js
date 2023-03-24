const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const compChoice = options[Math.floor(Math.random() * options.length)]
    return compChoice
}

function getPlayerChoice() {
    let validatedSelection = false
    while (validatedSelection == false) {
      const selection = prompt("What will you throw - rock, paper, or scissors?")
      if (selection == null) {
        continue
    }
      const selectionLowerCase = selection.toLowerCase()
      if (options.includes(selectionLowerCase)) {
        validatedSelection = true;
        return selectionLowerCase
      }
    }
  } 

function winner(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
   return "tie"
   } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
   (playerSelection == "paper" && computerSelection == "rock") ||
   (playerSelection == "scissors" && computerSelection == "paper")) {
    return "win"
   } else {
    return "lose"
   }
 }
   

function playRound(playerSelection, computerSelection) {
  const result = winner(playerSelection, computerSelection)
  if (result == "tie") {
    return `It's a tie! You both threw ${playerSelection}!`
  } else if (result == "win") {
    return `You win - ${playerSelection} beats ${computerSelection}!`
  } else {
    return `You lose - ${computerSelection} beats ${playerSelection}!`
  }
} 
 

function playGame() {
   let playerScore = 0
   let compScore = 0
   console.log("Start Game")
   for (let i = 0; i < 5; i++) {
      let playerThrow = getPlayerChoice()
      let computerThrow = getComputerChoice()
      console.log(playRound(playerThrow, computerThrow))
      if (winner(playerThrow, computerThrow) == "win") {
        playerScore++
        console.log("Player: " + playerScore + " Computer: " + compScore)
        console.log("------------NEXT ROUND------------")
      } else if (winner(playerThrow, computerThrow) == "lose") {
        compScore++
        console.log("Player: " + playerScore + " Computer: " + compScore)
        console.log("------------NEXT ROUND------------")
      } else if (winner(playerThrow, computerThrow) == "tie") {
        console.log("Player: " + playerScore + " Computer: " + compScore)
        console.log("------------NEXT ROUND------------")
      }
   }
  console.log("Game over!")
  if (playerScore > compScore) {
    console.log("Final Results: You win!")
    console.log("Player: " + playerScore + " Computer: " + compScore)
  } else if (compScore > playerScore) {
    console.log("Final Results: The computer wins!")
    console.log("Player: " + playerScore + " Computer: " + compScore)
  } else {
    console.log("Final Results: It's a tie!")
    console.log("Player: " + playerScore + " Computer: " + compScore)
  }
}

//   playGame()
  //    boom