//#1
function getWeekDay(date){
   let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   let dayName = days[date.getDay()];
   return dayName

}
console.log(getWeekDay(new Date(2020, 9, 22)))

// #2
function getAmountDaysToNewYear(currentDate){
   let date = new Date(currentDate)
   let year = new Date(2022,12,31)
   let res = Math.round((year-date)/ (1000 * 3600 * 24))+1;
   return res
} 
console.log(getAmountDaysToNewYear(new Date(2022, 8 , 30)))
//#3
const birthday17 = new Date(2004, 12, 29);
const birthday15 = new Date(2006, 12, 29);
const birthday22 = new Date(2000, 9, 22);
function getApproveToPass(birthdate){
   let today = new Date();
   let bDate = Date.parse(birthdate)
   let res = (today - bDate)/(1000 * 60 * 60 * 24*365);
   if (res>18) {
 return console.log('Hello adventurer, you may pass!'); 
} else if(res>=17 && res<=18) {
 return console.log('Hello adventurer, you are to yang for this quest wait for few more months'); 
} else if(15<res){
     let years = (18-res).toFixed(0)
    return console.log(`Hello adventurer, you are to yang for this quest wait for ${years} years more`); 
}
}
getApproveToPass(birthday17)
getApproveToPass(birthday15)
getApproveToPass(birthday22)
// #4  
const elementP = 'tag="p" class="text" style={color: #aeaeae;}  value="Aloha!"'
function transformStringToHtml(str) {
  let HtmlTag = str.match(/tag="(.*)" c/)[1];
  let HtmlClass = str.match(/class="(.*)" s/)[1];
  let style = str.match(/style={(.*)}/)[1];
  let textValue = str.match(/value="(.*)"/)[1];
  return `<${HtmlTag} class=”${HtmlClass}” style=”${style}”>${textValue}</${HtmlTag}>`;
}
console.log(transformStringToHtml(elementP))
// # 5
function isValidIdentifier(variable) {
return !(variable.match(/^[(1-9)0-9]/gm) || variable.match(!/^.*[a-zA-Z]+.*$/gm) ||
variable.match(/^(?!.*([$_])).*/gm));
}
console.log(isValidIdentifier('myVar!')); // false
console.log(isValidIdentifier('myVar$')); // true
console.log(isValidIdentifier('myVar_1')); // true
console.log(isValidIdentifier('1_myVar')); // false

//#6
function capitalize (str){
const words = str.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
return words.join(' ');
}
console.log(capitalize('My Name Is John Smith. I Am 27.'));
// #7 

function isValidPassword(pasw) {
  const regexpPasw = /^[A-Z]{1,}[a-z]{1,}[\d]{1,}$/gm;
  if (pasw.length < 8) {
 return false; 
} else {
 return regexpPasw.test(pasw); 
}   
}
console.log(isValidPassword('agent007')); // false (no uppercase letter)
console.log(isValidPassword('AGENT007')); // false (no lowercase letter)
console.log(isValidPassword('AgentOOO')); // false (no numbers)
console.log(isValidPassword('Age_007')); // false (too short)
console.log(isValidPassword('Agent007')); // true

// # 8 
function bubbleSort(arr){
let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([7,5,2,4,3,9])); 


// # 9 
const inventory = [
  { name: 'milk', brand: 'happyCow', price: 2.1 }, 
  { name: 'chocolate', brand: 'milka', price: 3 }, 
  { name: 'beer', brand: 'hineken', price: 2.2 }, 
  { name: 'soda', brand: 'coca-cola', price: 1 } 
  ];
  function sortByItem({ item, array }) { 
      function compare( a, b ) {
        if ( a[item] < b[item] ){
          return -1;
        }
        if ( a[item] > b[item] ){
          return 1;
        }
        return 0;
      }
      return array.sort(compare)
 }
console.log(sortByItem({item: 'price', array: inventory})); 