//--------------------------------Task1--------------------------------

function Animal(name) {
    this.name = name;
    this.foodAmount = 50; 
}

Animal.prototype.formatFoodAmount = function () {
    return this.foodAmount+' гр. ';
}

Animal.prototype.feed = function () {  
    console.log ('Насыпаем в миску ' +this.formatFoodAmount()+' корма.');
  
}
Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) {
        return this.formatFoodAmount();
    }

    if (amount < 50) {
         throw new Error('Too less.');
    } else if (amount > 500) {
         throw new Error('Too much');
    }
    this.foodAmount = amount;
}

function Cat(name) {
    Animal.apply(this, arguments);     
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
} 

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');  
    return this;
}

//--------------------------------Task2--------------------------------

function cloneObject(object){
    var clone = {};   
    
    if (Array.isArray(object)){
        var arr =[];
        for (var i = 0; i < object.length; i++){
            
            if (typeof object[i] != 'object'){
                arr[i] = object[i];
            } else {
                arr[i] = cloneObject(object[i]);
            }
        }
        return arr;
       }
         
    for (var key in object){ 
            
        if (typeof object[key] == 'object') {     
                clone[key] = cloneObject(object[key]);
                continue;
            }   
        clone[key] = object[key];   
    }
  
    return clone;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
}

var clonedObj = cloneObject(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


//--------------------------------Task 3--------------------------------
function compareObject(obj1, obj2) {

    if (obj1 === obj2) {
      return true;
    }
  
    if (obj1 === null || obj2 === null) {
      return false;
    }
  
    if (typeof obj1 === 'undefined' || typeof obj2 === 'undefined') {
      return false;
    }
  
    if (obj1 instanceof Array && obj2 instanceof Array) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      for (var key in obj1) {
        if (!compareObject(obj1[key], obj2[key])) {
          return false;
        }
      }
      return true;
    }
  
    if (typeof obj1 === 'object' && typeof obj2 === 'object' &&
      !(obj1 instanceof Array) && !(obj2 instanceof Array)) {

      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }

      for (var key in obj1) {

        if (typeof obj1[key] === 'function' && typeof obj2[key] === 'function') {
            console.log(obj1[key].toString());
            console.log(obj2[key].toString());
            if (obj1[key].toString() == obj2[key].toString()) {
              return true;
            }
          }

        if (typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object') {
          if (obj1[key] !== obj2[key]) {
            return false;
          }
        }

        if (!compareObject(obj1[key], obj2[key])) {
          return false;
        } 
      }
      return true;
    }
    return false;
  }
  



var user2 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {method: function() {
                alert('Hello');
            }}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
}

var user1 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {method: function() {
                alert('Hello');
            }}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
}
console.log(compareObject(user1,user2));