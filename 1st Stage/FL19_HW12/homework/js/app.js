import { dictionary } from './dictionary.js';
const ATTEMPTS = 6;
let attemptsLeft = ATTEMPTS;
let arrCurrentTry = [];
let nextLetter = 0;
let randomWord = dictionary[Math.floor(Math.random() * dictionary.length)]
console.log(randomWord)

function createBox() {
   let gameBox = document.getElementById('game-box');

   for (let i = 0; i < ATTEMPTS; i++) {
       let row = document.createElement('div')
       row.className = 'letter-row'
       
       for (let j = 0; j < 5; j++) {
           let box = document.createElement('div')
           box.className = 'letter-box'
           row.appendChild(box)
       }

       gameBox.appendChild(row)
   }
}
document.getElementById('check').addEventListener('click', checkWord )
document.getElementById('reset').addEventListener('click', reset )
document.addEventListener('keyup', (e) => {
   if (attemptsLeft === 0) {
       return
   }

   let pressedKey = String(e.key)
   if (pressedKey === 'Enter') {
        checkWord()
       return
   }

   if (pressedKey === 'Backspace' && nextLetter !== 0) {
    delLetter()
    return
}

   let found = pressedKey.match(/[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]/gi)
   if (!found || found.length > 1) {
       return
   } else {
       insertStr(pressedKey)
   }
})

function insertStr (pressedKey) {
   if (nextLetter === 5) {
       return
   }
   pressedKey = pressedKey.toLowerCase()

   let row = document.getElementsByClassName('letter-row')[6 - attemptsLeft]
   let box = row.children[nextLetter]
   box.textContent = pressedKey
   box.classList.add('border-box')
   arrCurrentTry.push(pressedKey)
   nextLetter += 1
}
function delLetter () {
   let row = document.getElementsByClassName('letter-row')[6 - attemptsLeft]
   let box = row.children[nextLetter - 1]
   box.textContent = ''
   box.classList.remove('border-box')
   arrCurrentTry.pop()
   nextLetter -= 1
}
function checkWord () {
   let row = document.getElementsByClassName('letter-row')[6 - attemptsLeft]
   let guessStr = ''
   let rightAnswer = Array.from(randomWord)

   for (const val of arrCurrentTry) {
       guessStr += val
   }

   if (guessStr.length !== 5) {
       alert('Not enough letters!')
       return
   }

   if (!dictionary.includes(guessStr)) {
       alert('Word not in list!')
       return
   }

   for (let i = 0; i < 5; i++) {
       let letterColor = ''
       let box = row.children[i]
       
       let letterPos = rightAnswer.indexOf(arrCurrentTry[i])
       
       if (letterPos === -1) {
           letterColor = 'grey'
       } else {
           
           if (arrCurrentTry[i] === rightAnswer[i]) {
               
               letterColor = 'green'
           } else {
              
               letterColor = 'yellow'
           }

           rightAnswer[letterPos] = '#'
       }

       let delay = 250 * i
       setTimeout(() => {
           box.style.backgroundColor = letterColor
       }, delay)
   }

   if (guessStr === randomWord) {
       alert('Congratulations you win!')
       attemptsLeft = 0
       return
   } else {
    attemptsLeft -= 1;
    arrCurrentTry = [];
       nextLetter = 0;

       if (attemptsLeft === 0) {
           alert("Game over!")
           alert(`The right word was: "${randomWord}"`)
       }
   }
}
function reset(){
   window.location.reload()
}
createBox()