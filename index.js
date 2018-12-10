
// ***********************ROCK-PAPER-SCISSORS**********************************
//
// let readlineSync = require('readline-sync');
//
// console.log("Welcome to the most intense rock paper scissors game! ever! -Ana");
//
// let options = ['rock', 'paper', 'scissors'];
//
// let play = true;
//
// let score = {
// 	userScore: 0,
// 	computerScore: 0
// }
//
// while(play) {
//
// 	  let choiceIndex =
// 		 readlineSync.question("Choose wisely. 1: Rock, 2: Paper, 3: Scissors ");
//
// 	  while(!(choiceIndex > 0 && choiceIndex <=3)) {
  // 		console.log("CHOOSE A VALID INPUUUUT!!!!");
  // 		choiceIndex = readlineSync.question("Choose wisely. 1: Rock, 2: Paper, 3: Scissors ");
// 	  }
//
// 	  let userChoice = options[choiceIndex - 1];
//
// 	  let computerIndex = Math.random() * 3;
//
// 	  computerIndex = Math.floor(computerIndex);
//
// 	  let computerChoice = options[computerIndex];
//
// 	  if(computerChoice === userChoice) {
// 		 console.log('DRAW!!!');
// 	} else if(userChoice === 'scissors' && computerChoice === 'paper' || userChoice==='paper' && computerChoice==='rock' || userChoice==='rock' && computerChoice==='scissors') {
// 		console.log("YOU WIN FATALITY!!");
// 		console.log('User chose', userChoice);
// 		console.log('Computer chose', computerChoice);
// 		score.userScore++;
// 		console.log(`Computer: ${score.computerScore} User: ${score.userScore}`)
// 	} else {
// 		console.log("YOU DIED");
// 		console.log('User chose', userChoice);
// 		console.log('Computer chose', computerChoice);
// 		score.computerScore++;
// 		console.log(`Computer: ${score.computerScore} User: ${score.userScore}`)
// 	}
//
// 	let playAgain = readlineSync.question('Want to play again? y/n ');
//
// 	if(playAgain.toLowerCase() === 'n') {
// 		play = false;
// 	}
//
// }
//
// console.log("THANKS FOR PLAYING!!!! SUPPORT US ON PATREON LIKE AND SHARE FOLLOW US ON INSTAGRAM SUBSCRIBE TO OUR MINUTE BY MINUTE NEWSLETTER");

// *************************WEEKEND-GAME-PROJECT**********************************

let readlineSync = require('readline-sync');

var userName = readlineSync.question('Enter your name to begin: ');
console.log('Hi ' + userName + '! Need an activity suggestion? Go ahead and enter the time of day at the prompt below. You can enter something like "Morning" or "Evening": ');
let option = ['Morning', 'Noon', 'Afternoon', 'Evening', 'Night']

let run = true;
let choice = readlineSync.question("Pick a time of day: ");

let morningActivity = [
  {
    activity: 'go for a run 🏃',
    message: 'Enjoy your run!'
  },
  {
    activity: 'eat breakfast 🍳',
    message: 'Enjoy your breakfast!'
  },
  {
    activity: 'do some yoga 🧘',
    message: 'Enjoy your yoga session!'
  }
]

let noonActivity = [
  {
    activity: 'grab lunch with a friend 🍴🥗🍹',
    message: 'Enjoy catching up!'
  },
  {
    activity: 'go for a walk 🚶',
    message: 'Enjoy your walk!'
  },
  {
    activity: 'run an errand 🏦',
    message: 'Have fun with that...LOL'
  }
]

let afternoonActivity = [
  {
    activity: 'take a nap 😴',
    message: 'Enjoy your nap!'
  },
  {
    activity: 'do a crossword puzzle 🧩',
    message: 'Good Luck!'
  },
  {
    activity: 'read a book 📚',
    message: 'Enjoy your reading adventure!'
  }
]

let eveningActivity = [
  {
    activity: 'pour some wine 🍷',
    message: 'Time to relax...cheers!'
  },
  {
    activity: 'make dinner 👨‍🍳',
    message: 'Julia Child would be proud.'
  },
  {
    activity: 'watch netflix & chill 📺',
    message: 'No... Not THAT "Netflix & Chill"...😂'
  }
]

while(run){

    let randomMorningIndex = Math.floor(Math.random() * morningActivity.length)
    let randomNoonIndex = Math.floor(Math.random() * noonActivity.length)
    let randomAfternoonIndex = Math.floor(Math.random() * afternoonActivity.length)
    let randomEveningIndex = Math.floor(Math.random() * eveningActivity.length)

    if(choice.toLowerCase() == "morning") {
        console.log('Good morning!');
        console.log(`You should ${morningActivity[randomMorningIndex].activity}`)
        console.log(morningActivity[randomMorningIndex].message)

    } else if (choice.toLowerCase() == 'noon') {
        console.log('Good afternoon!')
        console.log(`You should ${noonActivity[randomNoonIndex].activity}`)
        console.log(noonActivity[randomNoonIndex].message)

    } else if (choice.toLowerCase() == 'afternoon'){
        console.log('Good afternoon!')
        console.log(`You should ${afternoonActivity[randomAfternoonIndex].activity}`)
        console.log(afternoonActivity[randomAfternoonIndex].message)

    } else if (choice.toLowerCase() == 'evening'){
        console.log('Good evening!')
        console.log(`You should ${eveningActivity[randomEveningIndex].activity}`)
        console.log(eveningActivity[randomEveningIndex].message)

    } else if (choice.toLowerCase() == 'night') {
        console.log('Good evening.')
        console.log('You should get some sleep.')

    } else {console.log('Please choose an available option.')
}

let anotherSuggestion = readlineSync.question('Want another suggestion? y/n ');

if(anotherSuggestion.toLowerCase() === 'n') {
		run = false;
    console.log('Thanks for using my app. If you like, consider helping fund a poor student\'s education. You can contribute via: direct deposit to my bank account, check or money order, my GoFundMe link or CASH MONEY IN THE 411 YA BABY $$$')
	}
}
