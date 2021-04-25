function Animal(name) {
    var self = this;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount+'гр.'     
    }

    self._name = name;

    self.feed = function () {  
        console.log ('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
        return self;    
    }
    self.dailyNorm = function (amount) {
        if (!arguments.length) {
            return formatFoodAmount();
        }

        if (amount < 50) {
             throw new Error('Too less.');
        } else if (amount > 500) {
             throw new Error('Too much');
        }
        foodAmount = amount;
    }
    
}

function Cat(name) {
    Animal.apply(this,arguments);

    var self = this;
    
    var  animalFeed = self.feed;
    self.feed = function () {
        animalFeed();
        console.log('Кот доволен ^_^');
        return self;
    }

    self.stroke = function () {
        console.log('Гладим кота');
        return self;
    }  
}

var barsik = new Cat ('Barsik');
barsik.feed().stroke().feed().stroke().feed().feed().feed().feed().feed().feed().feed().feed().stroke().stroke().stroke();



