//----------------------Task 1--------------------
function getObjectArray(arr) {
    var newArray = arr.map(function(item, i, arr) {
        var obj ={};
        obj.name = item;
        return obj;
    });
    return newArray;   
}

var arr = ['Vasya','Petya','Sasha','Lesha'];
console.log(getObjectArray(arr));

//----------------------Task2--------------------
function getCurrentTime (arr) {

    var currentTime = arr.reduce(function (prev,item,i,arr) {
        return prev+' : '+item;
    });
 
    return 'Текущее время : ' + currentTime +'\"';
}

var arrTime = ['00', '13', '24'];
console.log(getCurrentTime (arrTime));

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

var vowel = 'студент';
console.log (getVowelQantity(vowel));

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

var str= 'Привет, студент! Студент... Как дела, студент?';
getTextInfo(str);

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
        var str = item.toLowerCase();
        if (!(str in obj) && (str != '')){
            obj[str] = 1;
        } else {
            obj[str] += 1;
        }
        word = str;
        quantity = obj[str];
    });
    
    for (var key in obj){
        if (obj[key] > quantity){
            word = key;
            quantity = obj[key];
        }
    }
    
    console.log('Максимальное число повторений у слова '+word+' - '+quantity);
    console.log(obj);
}

var str= 'Привет, студент! Студент... Как дела, студент?';
getMostFrequencyWord(str);