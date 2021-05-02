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

   arr.some (function (item, i) {
        if (item > 0) {
            positive = item;
            return item;
        }
    });
   
 return positive;
}

//----------------------Task 3--------------------
function isPalindrome(word) {
    var start = 0;
    var end = word.length-1;

    while (start != end) {

        if (word[start].toLowerCase() != word[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

//----------------------Task 4--------------------
function isAnagram(firstWord, secondWord) {
    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();
    ln = firstWord.length;

    if (firstWord.length != secondWord.length) {
        return false;
    }

    for (var i = 0; i < ln; i++) {

       if (secondWord.indexOf(firstWord[i]) >= 0) {
           secondWord=secondWord.replace(firstWord[i],'');
       } else {
           return false;
       }
    }
return true;
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