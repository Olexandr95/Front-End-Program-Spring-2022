// #1
function extractCurrencyValue(param) {
const parsed = parseInt(param);
const big = BigInt(parsed)
if(param.length>16){
    return big
} else {
    return parsed
}
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) { 
for (let i in obj) {
    if (!obj[i]) {
    delete obj[i];
    }
}
    return obj;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }


// #3

function getUnique(param) {
    return Symbol(param)
} 

console.log(getUnique('Test')) // Symbol('Test')


// #4

function countBetweenTwoDays(startDate, endDate) {
    let Difference_In_Time = Date.parse(endDate) - Date.parse(startDate);
    let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    let Difference_In_Weeks = Math.floor(Math.ceil(Difference_In_Time / (1000 * 3600 * 24))/7)
    let Difference_In_Month = Math.round(Math.floor(Math.floor(Difference_In_Time / (1000 * 3600 * 24)/31)));
    let str ="The difference between dates is: " + Difference_In_Days + " day(-s), " +
     Difference_In_Weeks + " week(-s), "+ Difference_In_Month + " month(-s)";
    return str;
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)


// #5

function filterArrayWithSet(arr) {
    let filterArr = [...new Set(arr)];
    return filterArr;
}
function filterArray(arr) {
    let uniqArray = arr.filter( (item, pos, arr) => !pos || item !== arr[pos - 1] );
    return uniqArray;
}

console.log(filterArrayWithSet([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 4, 5, 6, 7, 8, 9]
console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 4, 5, 6, 7, 8, 9]