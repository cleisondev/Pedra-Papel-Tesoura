const computerChoiceDisplay = document.querySelector('#computerchoice')
const resultDisplay = document.querySelector('#result')
const userChoiceDisplay = document.getElementById('userchoice')
const possibleChoices = document.querySelectorAll('.button')
const pedraPc = document.querySelector('.pedraPc')
const papelPc = document.querySelector('.papelPc')
const tesouraPc = document.querySelector('.tesouraPc')
const userCho = document.querySelector('.button')


let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => { possibleChoices.addEventListener('click', (e) => {
    if(userChoice === undefined){
        userChoiceDisplay.innerHTML = 'Muda um pouco'
    }
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
})
})


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if(randomNumber === 0){
        computerChoice = "Pedra"
        computerChoiceDisplay.innerHTML = computerChoice
        papelPc.style.display = 'none' 
        tesouraPc.style.display = 'none' 
        pedraPc.style.display = 'block' 

    } 
     if (randomNumber === 1){
        computerChoice = "Papel"
        computerChoiceDisplay.innerHTML = computerChoice
        pedraPc.style.display = 'none' 
        tesouraPc.style.display = 'none' 
        papelPc.style.display = 'block' 

    }
    
    if(randomNumber === 2) {
        computerChoice = "Tesoura"
        computerChoiceDisplay.innerHTML = computerChoice
        pedraPc.style.display = 'none' 
        papelPc.style.display = 'none' 
        tesouraPc.style.display = 'block' 
    }
    
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'Empate'
    } else if(computerChoice === 'Pedra' && userChoice === 'Papel'){
        result = 'Venceu'

    } else if(computerChoice === 'Pedra' && userChoice === 'Tesoura'){
        result = 'Perdeu'

    } else if(computerChoice === 'Papel' && userChoice === 'Tesoura'){
        result = 'Venceu'
    }
       else if(computerChoice === 'Papel' && userChoice === 'Pedra'){
        result = 'Perdeu'
       }
       else if(computerChoice === 'Tesoura' && userChoice === 'Papel'){
        result = 'Perdeu'
       }
       else if(computerChoice === 'Tesoura' && userChoice === 'Pedra'){
        result = 'Venceu'
       }

      resultDisplay.innerHTML = result
    }