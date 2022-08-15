const nickname = document.getElementById('nickname').value;
const button = document.getElementById('button')
const TIMEOUT = 5000;
let clicks = 0;
let best = 0;
let bestForAll = 0;
document.getElementById('startb').addEventListener('click', checkNick);
function checkNick(){
   const nickname = document.getElementById('nickname').value;
   try { 
      if(nickname===''){
      document.getElementById('startb').addEventListener('click', start);
      throw new Error()
   } 
}catch(e) {
      window.alert('nickname is empty')
      }
}
document.getElementById('bestresult').addEventListener('click', bestResAlert)
document.getElementById('bestresultforall').addEventListener('click', bestResForAllTimeAlert)
document.getElementById('clearbest').addEventListener('click', clearBest )
document.getElementById('bestclearall').addEventListener('click', claerBestForAll)

function start() {
document.getElementById('button').onclick = function(){
   clicks+=1;
}
const nickname = document.getElementById('nickname').value;
const timeout = setTimeout(() => {
   bestResault()
   bestResaultAll()
   alert(`You clicked ${clicks} times`)
   reset()
  }, TIMEOUT);
console.log(timeout, nickname)
}
function reset(){
   clicks=0;
   button.removeEventListener('click', start)
}
function bestResault(){
   const nickname = document.getElementById('nickname').value;
   let bestNick = nickname.value;
   if(clicks>best){
      best = clicks;
      sessionStorage.setItem('bestRes', best.toString())
      }else if(best>bestForAll){
      bestForAll = best;
      localStorage.setItem('bestForAllTime', bestForAll.toString());
      localStorage.setItem('bestForAllTimeNick', bestNick.toString())
   }
}
function bestResaultAll(){
   const nickname = document.getElementById('nickname').value;
   let bestNick = nickname;
   console.log(bestNick)
   if(best>bestForAll){
      bestForAll = best;
      localStorage.setItem('bestForAllTime', bestForAll.toString());
      localStorage.setItem('bestForAllTimeNick', bestNick)
   }
}
function bestResAlert(){
   let res = sessionStorage.getItem('bestRes');
   alert(`Best result is ${res}`)
}
function bestResForAllTimeAlert(){
   let nick = localStorage.getItem('bestForAllTimeNick');
   let res = localStorage.getItem('bestForAllTime');
   alert(`Best result for the whole time is ${res} by  ${nick} `);
}
function clearBest(){
   alert('Best result is creared')
   sessionStorage.clear('bestRes')
}
function claerBestForAll (){
   alert('Best result for the whole time is creared')
   localStorage.clear('bestForAllTimeNick');
   localStorage.clear('bestForAllTime');
}
