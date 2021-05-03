//----------------------Task 1--------------------
function getPositiveNumbersArr(numbers) {
    var newArr = numbers.filter(function(number) {
        return number > 0;   
    });
    return newArr;
}

//----------------------Task 2--------------------
function getFirstPositiveInArray(arr) {
    var positive = 0;
 
    arr.reverse().forEach (function (item, i,arr) {
         if (item > 0) {
             positive = item;
         }
         return item;
     });  
  return positive;
 }

//----------------------Task 3--------------------
function isPalindrome(word) {
    return word.toLowerCase() == word.split('').reverse().join('').toLowerCase();   
}

//----------------------Task 4--------------------
function isAnagram(firstWord, secondWord) {
    firstWord = firstWord.toLowerCase().split('').sort().join('');
    secondWord = secondWord.toLowerCase().split('').sort().join('');
    return firstWord == secondWord;
}

//----------------------Task 5--------------------
function  divideArr (arr, devider) {
    var newArr = [];
    part = Math.floor(arr.length / devider);
    appendix = arr.length % devider;

    if (appendix != 0) {
        part++;
    }
    
    for (var i = 0; i < devider; i++) {
        newArr[i] = arr.slice(i*part, i*part+part);
    }
    return newArr;
}