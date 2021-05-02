//----------------------Task 1--------------------
function getObjectArray(arr) {
    var newArray = [];
    arr.forEach(function(item, i, arr) {
        var obj = {};
        obj.name = item;
        newArray[i] = obj;
    });
    return newArray;   
}

//----------------------Task2--------------------
function getCurrentTime (arr) {
    var currentTime = '';
    arr.forEach(function(item, i, arr) {

        if (i <arr.length-1) {
            currentTime += item + ' : '
        } else {
            currentTime += item +'\"';
        }
    });
    return 'Текущее время : '+currentTime;
}

//----------------------Task 3--------------------
function getVowelQantity(str) {
    var vowelArr = ['а','о','у','ы','и','е','ё','ю','я','э','a','e','i','o','u','y'];
    var quantityVowel = 0;
    str = str.toLowerCase();
    
    vowelArr.forEach(function (item,i,vowelArr) {
        var pos = 0;

        while (str.indexOf(item, pos) != -1){
            quantityVowel++;
            pos = str.indexOf(item, pos) + 1; 
        }
    });
    return quantityVowel;
}

//----------------------Task 4--------------------
function getTextInfo(text) {
    var sentenceArr = text.split(/[.!?...]/);

        sentenceArr = sentenceArr.filter(function (item, i, sentenceArr) {      
            return item != '';    
        });

        for(var i = 0; i< sentenceArr.length; i++){
            sentenceArr[i] = sentenceArr[i].trim();
            var sum = 0;

            for(var j = 0; j < sentenceArr[i].length; j++){  
                if (sentenceArr[i][j] != ' ' && sentenceArr[i][j] != ':' && 
                    sentenceArr[i][j] != '-' && sentenceArr[i][j] != ',') {
                    sum++;
                }
            }
            console.log(sentenceArr[i] + ': Letters quantity is: ' + sum);
    }
}

//----------------------Task 5--------------------
function getMostFrequencyWord(text) {
    var textArray = text.split(/[.!?,:-\s]/);
    textArray= textArray.filter(function (item, i, textArray) {
        return item != '';       
    });

    var obj = {};
    var word;
    var quantity;

    textArray.forEach(function (item,i,textArray) {
        
        if (!(item in obj) && (item != '')){
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }
        word = item;
        quantity = obj[item];
    });
    
    for (var key in obj){
        if (obj[key] > quantity){
            word = key;
            quantity = obj[key];
        }
    }
    console.log('Максимальное число повторений у слова '+word+' - '+quantity);
}