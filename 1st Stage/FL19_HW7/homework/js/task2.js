let gameStart = confirm('Do you want to play a game?');
let atempts = 3;
let prize = 100;
let totalPrize = 0;
let krok = 0;
let dooble =1;
start()
function start(){
   if(gameStart===true){
	gamePlay()
   }else{
	alert('You did not become a billionaire, but can.')
   }
}
function gamePlay() {
	let maxRange =8;
	let randomNum = Math.floor(Math.random()*(maxRange+krok)+1);
	for(let i=0; i<atempts; i++){
	let currPossiblePrize = prize/Math.pow(2,i);
	let userAnswer = +prompt(`Choose a roulette pocket number from 0 to ${maxRange+krok}
Attempts left:  ${atempts - i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${currPossiblePrize}$`);
		if(userAnswer === randomNum){
		totalPrize+= currPossiblePrize;
		isContin()
		break;
	}
	}
		return end()	
}
function end(){
	alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
	reset()
	if(confirm('Do you want to play a game?')){
		return gamePlay()
	}else{
		return false;
	}
}
function isContin(){
   if(confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`)){
      krok+=4;
      dooble=2;
      prize*=dooble;
      gamePlay()
      return true
   }else{
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      reset()
   }if(confirm('Do you want to play a game?')){
      return	gamePlay()
   }else{
      return false;
   }
}
function reset (){
atempts = 3;
prize = 100;
totalPrize = 0;
krok = 0;
dooble =1;
}