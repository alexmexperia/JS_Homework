var xField = document.getElementById('x-count');
var yField = document.getElementById('y-count');
var btnCreate = document.getElementById('create-btn');
btnCreate.disabled=true;

function enableCreateBtn (event){
    btnCreate.disabled = (xField.value && yField.value) ? false : true; 
}

xField.addEventListener('keyup', enableCreateBtn);
yField.addEventListener('keyup', enableCreateBtn);


btnCreate.addEventListener('mousedown', function(event){

    if (!Number.isInteger(+xField.value)) {
        alert ('Incorrect X format. Please enter integer number');
        xField.value = '';
        btnCreate.disabled=true;
    } else  
            if (+xField.value>10 || +xField.value<1 ) {
                alert ('Incorrect X value. Please enter number from 1 to 10');
                xField.value = '';
                btnCreate.disabled=true;
            }

    if (!Number.isInteger(+yField.value)) {
        alert ('Incorrect Y format. Please enter integer number');
        yField.value = '';
        btnCreate.disabled=true;
    } else 
            if (+yField.value>10 || +yField.value<1 ) {
                alert ('Incorrect Y value. Please enter number from 1 to 10');
                yField.value = '';
                btnCreate.disabled=true;
            }

    var rowsCount = +yField.value;
    var colsCount = +xField.value;

    var newTable = document.createElement('table');
 

    for (var i = 0; i < rowsCount; i++) {
        var row = document.createElement('tr');

        for (var j = 0; j < colsCount; j++) {
            var cell = document.createElement('td'); 
            row.appendChild(cell);

            if (i % 2 != 0) {
                if (j % 2 == 0) {
                    cell.classList.add('black');
                }
            }

            if (i % 2 == 0) {
                if (j % 2 != 0) {
                    cell.classList.add('black');
                }
            }
        }
        newTable.appendChild(row);
    }

    if (document.getElementsByTagName('table')[0]) { 
        document.getElementsByTagName('table')[0].remove();
    }

    document.getElementsByTagName('body')[0].appendChild(newTable);
    btnCreate.disabled = true;

    var table = document.getElementsByTagName('table')[0];

    table.onclick = function(event) {
        var target = event.target;
        if (target.tagName == 'TD') {

            var qnty = document.getElementsByTagName('td');
            for (var i = 0; i < qnty.length; i++){
                qnty[i].classList.toggle('black');
            }
        }
    };

});
