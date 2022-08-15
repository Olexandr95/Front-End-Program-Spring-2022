const root = document.getElementById('root'); 

const url = 'https://rickandmortyapi.com/api/character/';
let localStorageBox = JSON.parse(localStorage.getItem('searched') || '[]');
let allCharacter = [];
let readyCharacter = [];
let dataLoad = false;

const conteinerChars = document.querySelector('#characters-wrap');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const loadMore = document.querySelector('.load-more');
let download;

function getFetch (url){
   return fetch(url)
      .then(response => response.json())
      .then(data => {
         loadChars(data);
         if(data.info.next) {
            getFetch(data.info.next);
         }else{
            dataLoad = true;
            getChars();
         }
      })
}
getFetch(url);

window.addEventListener('load', showChar(conteinerChars, localStorageBox, 'searched' ));

function loadChars(characters){
   allCharacter.push(characters.results);
   allCharacter = allCharacter.flat();
   return allCharacter;
}

function getChars(){
   let searchChar;
   searchBtn.addEventListener('click', function(){
      searchChar = searchElement(searchInput);
      let duplicChars = readyCharacter.filter((a, i, aa) => aa.indexOf(a) === i && aa.lastIndexOf(a) !== i);
      if(duplicChars.includes(searchChar.id)){
         alert('Character is already in the list');
      } else if(localStorageBox.some(el => el.id === searchChar.id)){
         alert('Character is already in the list');
      }else{
         localStorageBox.unshift(searchChar);
         localStorage.setItem('searched', JSON.stringify(localStorageBox));
         showChar(conteinerChars, localStorageBox, 'searched')
      }
   });
}

function searchElement(input){
   let searchChar;
   let inputValue = Number(input.value);
   if( typeof inputValue !== 'number' || input.value === ''){
      return alert('Character not found');
   }else{
      searchChar = allCharacter.find(char => char.id === inputValue);
      readyCharacter.push(searchChar.id);
      return searchChar;
   }
}

function showChar (container, element, key){
   const letStorage = JSON.parse(localStorage.getItem(key, element));
   let sliceToEnd = 5;
   let slicedStorage = letStorage.slice(0, 5);
   container.innerHTML = slicedStorage.map(item => 
      `<div class="card-list ${item.id}">
        <img src="${item.image}" class="card-img">
        <h3 class="card-title">${item.name}</h3>
        <button class="delete-btn">X</button>
        </div>`
      );
   if(letStorage.length>5){
      loadMore.classList.add('active');
   }

   let download = function loadM(){
      if(sliceToEnd<letStorage.length){
         let slicedStorage = letStorage.slice(0, sliceToEnd);
         sliceToEnd+=5;
         container.innerHTML = slicedStorage.map(item =>
            `<div class="card-list ${item.id}">
        <img src="${item.image}" class="card-img">
        <h3 class="card-title">${item.name}</h3>
        <button class="delete-btn">X</button>
        </div>`
            )
      }
      checkTimeOut()
   }
   loadMore.addEventListener('click', download)
}

function checkTimeOut (){
   const deleteBtn = document.querySelectorAll('.delete-btn');
   let currentId;

   deleteBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
         localStorageBox = JSON.parse(localStorage.getItem('searched', localStorageBox));
         const currentBtn = e.target;
         const currentParent = currentBtn.parentNode;
         currentId = Number(currentParent.classList[1]);
         detectDelElemnt(localStorageBox, 'searched', currentId);
         currentParent.classList.add('hide');
         showChar(conteinerChars, localStorageBox, 'searched')
      })
   })
}
window.setInterval(checkTimeOut, 500);
loadMore.addEventListener('click', download);


function detectDelElemnt(storage, key, id){
   for(let i = 0;i<storage.length; i++){
      if(storage[i].id === id){
         storage.splice(i, 1);
         localStorage.setItem(key, JSON.stringify(storage));
      }
   }
}


