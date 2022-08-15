window.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i<9; i++){
    const gameBox = document.querySelector('.container');
    const divBox = document.createElement('div')
    divBox.className = 'tile';
    gameBox.prepend(divBox);
    } 
     
    const announcer = document.querySelector('.announcer');
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');

    let boardBox = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameContin = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let count = 0;
    let icon1 = document.querySelector('[data-item="1"]')
    icon1.onmousedown = function (e) {
        let coords = getCoords(icon1);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;
        icon1.style.position = 'absolute';
        document.body.appendChild(icon1);
        moveAt(e);
        icon1.style.zIndex = 1000; 
        function moveAt(e) {
        icon1.style.left = e.pageX - shiftX + 'px';
        icon1.style.top = e.pageY - shiftY + 'px';
        }
        document.onmousemove = function(e) {
          moveAt(e);
        };
        icon1.onmouseup = function() {
          document.onmousemove = null;
          icon1.onmouseup = null;
          icon1.onmousedown = null
          count+=1
          chekCount()
        };
      }
      icon1.ondragstart = function() {
        return false;
      };
     function getCoords(elem) { 
        let box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
    }

    let icon2 = document.querySelector('[data-item="2"]')
    icon2.onmousedown = function (e) {
        let coords = getCoords(icon2);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;
        icon2.style.position = 'absolute';
        document.body.appendChild(icon2);
        moveAt(e);
        icon2.style.zIndex = 1000; 
        function moveAt(e) {
        icon2.style.left = e.pageX - shiftX + 'px';
        icon2.style.top = e.pageY - shiftY + 'px';
        }
        document.onmousemove = function(e) {
          moveAt(e);
        };
        icon2.onmouseup = function() {
          document.onmousemove = null;
          icon2.onmouseup = null;
          icon2.onmousedown = null;
          count+=1;
          chekCount()
        };
      }
      icon2.ondragstart = function() {
        return false;
      };
    
    let icon3 = document.querySelector('[data-item="3"]')
    icon3.onmousedown = function (e) {
        let coords = getCoords(icon3);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;
        icon3.style.position = 'absolute';
        document.body.appendChild(icon3);
        moveAt(e);
        icon3.style.zIndex = 1000; 
        function moveAt(e) {
        icon3.style.left = e.pageX - shiftX + 'px';
        icon3.style.top = e.pageY - shiftY + 'px';
        }
        document.onmousemove = function(e) {
          moveAt(e);
        };
        icon3.onmouseup = function() {
          document.onmousemove = null;
          icon3.onmouseup = null;
          icon3.onmousedown = null;
          count+=1;
          chekCount()
        };
      }
      icon3.ondragstart = function() {
        return false;
      };

    let icon4 = document.querySelector('[data-item="4"]')
    icon4.setAttribute("id", "icon4")
    icon4.onmousedown = function (e) {
        let coords = getCoords(icon4);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;
        icon4.style.position = 'absolute';
        document.body.appendChild(icon4);
        moveAt(e);
        icon4.style.zIndex = 1000; 
        function moveAt(e) {
        icon4.style.left = e.pageX - shiftX + 'px';
        icon4.style.top = e.pageY - shiftY + 'px';
        }
        document.onmousemove = function(e) {
          moveAt(e);
        };
        icon4.onmouseup = function() {
          document.onmousemove = null;
          icon4.onmouseup = null;
          icon4.onmousedown = null;
          count+=1;
          chekCount()
        };
      }
      icon4.ondragstart = function() {
        return false;
      };
    
    function chekCount(){
    if(count>1){
        icon1 = document.querySelector('[data-item="1"]').removeAttribute('[data-item="1"]')
        icon2 = document.querySelector('[data-item="2"]').removeAttribute('[data-item="2"]')
        icon3 = document.querySelector('[data-item="3"]').removeAttribute('[data-item="3"]')
        icon4 = document.querySelector('[data-item="3"]').removeAttribute('[data-item="4"]')
    }
}
    function checkResult() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winConditions[i];
            const a = boardBox[winCondition[0]];
            const b = boardBox[winCondition[1]];
            const c = boardBox[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            gameContin = false;
            return;
        }

    if (!boardBox.includes('')) {
 announce(TIE); 
}
    }

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const validAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard = (index) => {
      boardBox[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const playerAction = (tile, index) => {
        if(validAction(tile) && gameContin) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            checkResult();
            changePlayer();
        }
    }
    
    const resetBoard = () => {
        window.location.reload()
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => playerAction(tile, index));
    })


    
  window.addEventListener('keydown', function(e) {
    const callback = enterGame()
        tiles.addEventListener('specitialEvent', callback );
        const customEvent = new CustomEvent('specitialEvent');
        console.log(customEvent)
    if ( e.key === "Enter"){
    enterGame()
    }
  },{once : true})
function enterGame(){
        let counter = 4;
tiles[counter].style.backgroundColor = '#c5c7c4'
document.addEventListener('keydown', function(e) {
        switch (e.key) {
            case 'ArrowLeft':
              tiles[counter].removeAttribute('style');
                counter--
                if(counter === -1){
                    counter = 8;
                }
                tiles[counter].style.backgroundColor = '#c5c7c4'
                break;
            case 'ArrowRight':
              tiles[counter].removeAttribute('style');
                counter++
                if(counter === 9){
                    counter = 0;
                }
                tiles[counter].style.backgroundColor = '#c5c7c4'
                break;
             case 'Enter':
              if(validAction() && gameContin) {
                playerAction()
                updateBoard();
                checkResult();
                changePlayer();
                break;
            }
        }
    })
}  

    resetButton.addEventListener('click', resetBoard);

})