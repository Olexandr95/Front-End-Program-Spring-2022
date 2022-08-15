const a = +prompt('Enter 1st number');
const b = +prompt('Enter second number');
let arr =[];
if(a>b || !Number.isInteger(a)|| a===b || !Number.isInteger(b) ){
   alert('Invalid input data');
}else{
   numBetween(a,b);
}
function numBetween(a, b){
   for(let i=a+1; i<b; i++){
      arr.push(i);
   }
   let str = arr.join(' ')
   alert(`First number: ` + a +'\n' +
         `Second number: `+ b +'\n' +
         `Numbers between: `+ str)
}
