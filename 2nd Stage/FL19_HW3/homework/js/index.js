class Unit {
   constructor(name, health, atack, armor, speed){
      this.name = name;
      this.health = health;
      this.atack = atack;
      this.armor = armor;
      this.speed = speed;
   }
}
const start = document.querySelector('.start');
const fight = document.querySelector('.fight');
const charactersList = document.querySelector('.characters-list');
const battleField = document.querySelector('.battle-field');
let player = {};
let compPlayer = {};
const ONESECOND = 1000;
const herosArr = [
    new Unit('Spell Breaker', 400, 20, 4, 14),
    new Unit('Troll Headhunter', 380, 12, 1, 8),
    new Unit('Sorceress', 535, 28, 3, 15),
    new Unit('Ghoul', 385, 30, 5, 20),
    new Unit('Dragon Rider', 550, 5, 4, 16),
    new Unit('Footman', 400, 15, 8, 12),
    new Unit('Knightr', 535, 9, 2, 13),
    new Unit('Dragonhawk Rider', 541, 7, 5, 16),
    new Unit('Siege Engine', 350, 9, 6, 9)
]
class Game {
    chooseHero(playerHero, heroBox){
        const herosArr = Array.from(document.querySelectorAll(playerHero));
        herosArr.forEach(hero => {
            hero.addEventListener('click', function () { 
                const index = herosArr.indexOf(hero);
                player = heroBox[index];
                heroBox.splice(index, 1);
                compPlayer = heroBox[Math.floor(Math.random() * heroBox.length)];
                display.hideHeroConteiner();
            });
        }); 

    }
    startFight() {
        fight.addEventListener('click', function () {
            fight.disabled = true;
            const showFight = setInterval(() => {
                if (compPlayer.health > 0 && player.health > 0) {
                    player.health = player.health - ((compPlayer.atack / compPlayer.speed)
                    .toFixed(0)*50 - player.armor);
                    compPlayer.health = compPlayer.health - ((player.atack / player.speed)
                    .toFixed(0)*50 - compPlayer.armor);
                    display.battleFieldContainer();
                } else {
                    clearInterval(showFight);
                    display.battleFieldContainer();
                    display.showWinResult();
                }
            }, ONESECOND)
        });
    }
}

class Display {
    hideStartButton(){
        start.classList.add('hide')
    }
    showHeros(herosArr){
        alert('Choose your Fighter to START the GAME');
        for(const hero of herosArr){
            charactersList.innerHTML +=`<div class="hero">${hero.name}</div>`;
        }
    }
    hideHeroConteiner(){
        const herosArr = Array.from(document.querySelectorAll('.hero'));
        herosArr.forEach(hero => {
            hero.classList.add('hide');
        })
        this.removeFightList()
        this.battleFieldContainer();
    }
    removeFightList(){
        fight.classList.remove('hide')
    }
    battleFieldContainer(){
        battleField.innerHTML = 
        `<div class="hero-box ${player.name}">
        <h2 class="name">${player.name}</h2>
        <span class="health">${player.health}</span>
        <span class="atack">${player.atack}</span>
        <span class="armor">${player.armor}</span>
        <span class="speed">${player.speed}</span>
        </div>
        <div class="hero-box ${compPlayer.name}">
        <h2 class="name">${compPlayer.name}</h2>
        <span class="health">${compPlayer.health}</span>
        <span class="atack">${compPlayer.atack}</span>
        <span class="armor">${compPlayer.armor}</span>
        <span class="speed">${compPlayer.speed}</span>
        </div>`
    }
    showWinResult() {
        if (player.health <= 0 && compPlayer.health > 0) {
            alert(`${compPlayer.name} win!`);
        }
        if (player.health > 0 && compPlayer.health <= 0) {
            alert(`${player.name} win!`);
        }
        if (player.health <= 0 && compPlayer.health <= 0) {
            alert('Draw!');
        }
        location.reload();
    }
}
const game = new Game();
const display = new Display();
function startGame() {
    display.hideStartButton();
    display.showHeros(herosArr);
    game.chooseHero('.hero', herosArr);
    game.startFight();
}

start.addEventListener('click', startGame);