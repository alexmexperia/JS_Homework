
var btnCreate = document.getElementsByTagName('button')[0];
var nav = document.getElementsByClassName('nav')[0];
var field = document.getElementsByClassName('field')[0];
var btnNav = document.getElementsByClassName('nav')[0];

if (localStorage.getItem('data')){
    showInfo();
}

function getUserList(){
    var xhr = new XMLHttpRequest();
    var userList;
    xhr.open('GET','https://reqres.in/api/users?page=2');//'https://reqres.in/api/users?page=2'
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = function() {       
        var statusType = Math.round(this.status / 100);
        
        if (statusType == '2'){ 
            var data = xhr.response.data;
            localStorage.setItem('data',JSON.stringify(data)); 
            showInfo();  
        } else {
            var error = document.getElementsByClassName('nav')[0];
            error.innerHTML='Loading Data Error';
        }
    }
    xhr.onerror = function(){  
    }
}

function showInfo(){
    var userList = JSON.parse(localStorage.getItem('data'));

    for (var i = 0; i < userList.length; i++){
        var btn = document.createElement('button');
        var content = document.createElement('div');
        var img = document.createElement('img');
        
        content.classList.add('nav-content');
        btn.setAttribute('id',userList[i].id);
        btn.classList.add('nav-button');
        btn.innerHTML = 'User '+(i+1);
        nav.appendChild(btn);

        for (var key in userList[i]){
            img.src = userList[i].avatar;         
            content.innerHTML = '<div><p>First Name: ' + userList[i].first_name+'</p><p>Last Name: ' 
            + userList[i].last_name + '</p><p>Email: ' + userList[i].email+'</p></div>';
        }

        content.insertBefore(img, content.firstChild);
        field.appendChild(content);
        document.getElementsByClassName('nav-content')[0].classList.add('active');
        document.getElementsByClassName('nav-button')[0].classList.add('active');
    }
}

btnCreate.onclick = function (){

    if (!localStorage.getItem('data')){
        getUserList();
    }
}

btnNav.onclick = function(event){

    var target = event.target;
    if (target.tagName == "BUTTON"){

        for (var i = 0; i < document.getElementsByClassName('nav-content').length; i++){
            document.getElementsByClassName('nav-content')[i].classList.remove('active')
            document.getElementsByClassName('nav-button')[i].classList.remove('active')
        }

        target.classList.add('active');  
        document.getElementsByClassName('nav-content')[target.id-7].classList.add('active');
    }
}

