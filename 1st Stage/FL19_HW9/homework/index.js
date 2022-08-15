// #1
function calculateSum(arr) {
   let sum = arr.reduce((a, b) => a + b, 0);
   return sum;
}

//console.log(calculateSum([1,2,3,4,5])); //15

// #2
function isTriangle(a, b, c) {
if(a*b*c>0 && a+b>c && b+c>a && a+c>b){
    return true;
}else{
   return false;
}

}

//console.log(isTriangle(5,6,7)); //true
//console.log(isTriangle(2,9,3)); //false

// #3
function isIsogram(word) {
word = word.toLowerCase();
for(let i = 0; i<word.length; i++){
   for(let j = i+1; j<word.length; j++){
      if(word[i]===word[j]){
      return false;
      }
   }
}
   return true;
}

//console.log(isIsogram('Dermatoglyphics')); //true
//console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
   let str = word.toLowerCase()
   let arr = str.split('');
   let reverseArr = arr.reverse();
   let reverseWord = reverseArr.join('');
   if(str === reverseWord){
      return true;
   }else{
      return false;
   }
}

//console.log(isPalindrome('Dermatoglyphics')); //false
//console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
const dateList = dateObj.toString().split(' ')
const num2 = 2;
const num3 = 3;
return `${dateList[num2]} of ${dateList[1]}, ${dateList[num3]}`
}

//console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
   str = str.toLowerCase();
   letter = letter.toLowerCase();
   let count = 0;
   for(let i = 0; i<str.length; i++){
      if(str[i] === letter){
         count+=1
      }
   }
   return count
}

//console.log(letterCount('abbaba', 'b')); //3

// #7
function countRepetitions(arr) {
   const count = {};
   arr.forEach(element => {
   count[element] = (count[element] || 0) + 1;
   });
   return count;
}

//console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
   let str = arr.join('')
   let convert = parseInt(str,2)
   return convert
}
//console.log(calculateNumber([0, 1, 0, 1])); //5
//console.log(calculateNumber([1, 0, 0, 1])); //9
