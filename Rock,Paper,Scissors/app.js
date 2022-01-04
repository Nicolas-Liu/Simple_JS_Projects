const btns = document.querySelectorAll('.btn');
const ComputerChoice = document.querySelector('.ComputerResult');
const YourChoice = document.querySelector('.yourResult');
const winner = document.querySelector('.winner');
const RPS = ['Rock', 'Paper', 'Scissors'];


//display your choice and the PC's

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const choice = e.target.classList;
        const PCchoice = (RPS[getRandomNumber()])
        if (choice.contains('rock')){
            YourChoice.innerHTML = "You chose Rock and the PC chose " + PCchoice;
             //display winner
            if(PCchoice === 'Rock'){
                winner.innerHTML = 'Draw!'
            } else if (PCchoice === 'Paper'){
                winner.innerHTML = 'You lose'
            } else {
                winner.innerHTML = 'You win!'
            }
        }
        if (choice.contains('paper')){
            YourChoice.innerHTML = "You chose Paper and the PC chose " + PCchoice; 
              //display winner
            if(PCchoice === 'Rock'){
                winner.innerHTML = 'You win!'
            } else if (PCchoice === 'Paper'){
                winner.innerHTML = 'Draw!'
            } else {
                winner.innerHTML = 'You lose'
            }
        }
        if (choice.contains('scissors')){
            YourChoice.innerHTML = "You chose Scissors and the PC chose " + PCchoice; 
            if(PCchoice === 'Rock'){
                winner.innerHTML = 'You lose!'
            } else if (PCchoice === 'Paper'){
                winner.innerHTML = 'You win!'
            } else {
                winner.innerHTML = 'Draw'
            }
        };
    })
})

function getRandomNumber(){
    return Math.floor(Math.random()*RPS.length)
}

