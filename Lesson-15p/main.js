var container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar)
container.appendChild(secondPar);


button.addEventListener('click', function changeWeightColor() {
    var firstP = firstPar.children;
    for (var i = 0; i < firstP.length; i++) {
        if (firstP[i] = 'a'){
            firstP[i].classList.add('weight-color');
        }
    }
});

localStorage.clear();


secondPar.onclick = function(event) {
    var target = event.target;

    if (target.tagName == 'A') {   
        ч 
        if (!localStorage.getItem(target.text)) {
            var obj = {};
            obj.path =''+ target.href;
            localStorage.setItem(target.text,JSON.stringify(obj));
            target.href = '#';
            alert('The link was changed');
        } else {
            alert(JSON.parse(localStorage.getItem(target.text)).path);
        }
        return false;
    }
    secondPar.children[0].classList.add('weight-color');
    secondPar.children[1].classList.add('weight-color');
}

