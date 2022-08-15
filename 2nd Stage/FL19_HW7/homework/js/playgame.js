function LetPlay (){
   let countUser = document.querySelector('.count-user'),
   countComp = document.querySelector('.count-comp'),
   userField = document.querySelector('.user-field'),
   compField = document.querySelector('.comp-field'),
   res = document.querySelector('.result'),
   fields = document.querySelectorAll('.field'),
   play = document.querySelector('.play'),
   userStep, compStep, countU = 0, countC = 0; 
   let blocked = false;
   
   const choiceUser = function(e){
      if(blocked) {
 return; 
}
      let target = e.target;
      if(target.classList.contains('field')){
         userStep = target.dataset.field;
         fields.forEach(item => item.classList.remove('active', 'error'))
         target.classList.add('active');
         choiceComp()
      }
   }
   
   const choiceComp = function(){
      blocked = true;
      let random = Math.floor(Math.random()*3);
      compField.classList.add('blink');
      let compFields = compField.querySelectorAll('.field');
      setTimeout(() => {
         compField.classList.remove('blink');
         compStep = compFields[random].dataset.field;
         compFields[random].classList.add('active');
         winner()
      },2000)
   
   }
   
   const winner = function(){
      blocked = false;
      let comb = userStep + compStep;
      switch(comb){
         case 'rr':
         case 'ss':
         case 'pp':
            res.innerText = 'Draw';
            break;
         case 'rs':
         case 'sp':
         case 'pr':
            res.innerText = 'You’ve WON!';
            countU++;
            countUser.innerText = countU;
            compField.querySelector('[data-field='+compStep+']').classList.add('error')
            checkContinGame()
            break;
         case 'sr':
         case 'ps':
         case 'rp':
            res.innerText = 'You’ve LOST!';
            countC++;
            countComp.innerText = countC;
            userField.querySelector('[data-field='+userStep+']').classList.add('error')
            checkContinGame()
            break;
      }
   }
   
   const checkContinGame = function(){
      if(countU===2){
         alert('You’ve WON');
         playGame()
      }
      if (countC===2) {
         alert('You’ve LOST')
         playGame()
      }
   }
   play.addEventListener('click', playGame);
   userField.addEventListener('click', choiceUser)
}
export default LetPlay