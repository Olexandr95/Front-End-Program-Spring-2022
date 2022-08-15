const loadByJsButton = document.querySelector('#load-by-js')
const loadByFetchButton = document.querySelector('#load-by-fetch')
const loadingTime = 1000;

function loadingByXML() {
   const leftBox = document.querySelector('.left-box');
   const loading = document.querySelector('#loading');
   const xhr = new XMLHttpRequest();
   loading.classList.add('show')
   xhr.onload = loadData;
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
   xhr.send();
   function loadData() {
      const data = JSON.parse(this.responseText);
      loading.classList.remove('show');
      data.forEach(item => {
            leftBox.innerHTML += 
               `<h3 class="card-title" id="${item.id}">${item.name}</h3>`
      });
   }
}

loadByJsButton.addEventListener('click', loadingByXML, {once : true})
loadByFetchButton.addEventListener('click', loadingByFetch, {once : true})

async function loadingByFetch(){
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const todos = await res.json()
   todos.forEach(todo => onloadByFetch(todo))
}
function onloadByFetch({id, name}){
   const loadFetch = document.querySelector('#loadFetch');
   const rigthBox = document.querySelector('.rigth-box');
   //console.log(loadFetch)
   loadFetch.classList.add('show')
   rigthBox.insertAdjacentHTML('beforeend',
    `<div class="card-fetch" id="card${id}">
     <div class="flex" id="name${id}">${name}</div>
       <div class="flex">
       <button class="edit" id="edit" onclick="showInput(${id})">Edit</button>
       <button onclick='deleteCard(${id})'class="delete">Delete</button>
       </div>
       <div class="save-box hide" id="hide${id}">
          <input type="text" value='${name}' id="inputText${id}">
          <button class="save-btn" id="save${id}">Save</button>
       </div>
 </div>
    `)
    setTimeout(() => {
      loadFetch.classList.remove('show')
    }, loadingTime)
document.getElementById(`save${id}`).addEventListener('click', async () => {
      const input = document.querySelector(`#inputText${id}`);
      const title = input.value
      const nameId = document.getElementById(`name${id}`)
      nameId.innerHTML = title;
      
      if(title){
          await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {'Content-Type' : 'aplication/json'},
            body: JSON.stringify(title)
         });
         
         input.value = ''
      }
   })
}
async function deleteCard(id){
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json()
   if(data){
      document.getElementById(`card${id}`).remove()
      alert(`User with id – ${id} was deleted`)
   }
}

async function showInput(id){
   const res = await fetch('https://jsonplaceholder.typicode.com/users/${id}', {
      method: 'DELETE',
      headers: {'Content-Type' : 'aplication/json'}
   })
   const data = await res.json();
   if(data){
      document.getElementById(`hide${id}`).classList.remove('hide')
   }
}