// var myHeading = document.querySelector('h1');
//     myHeading.textContent = 'Hello world!';
// var myVariable = document.querySelector('h1');
// alert('Helloo!');

// function multiply(num1,num2) {
    
//     multiply(4,5);

//     var result = num1 * num2;
//     return result
// }

// document.querySelector('html').onclick = function() {
//     alert('Ты точно уверен?');
// }


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/blog5.png') {
      myImage.setAttribute ('src','images/figa.png');
    } else {
      myImage.setAttribute ('src','images/blog5.png');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {

    var myName = prompt('а ну ка скажи твое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Здесь будут показываться вопросы,  ' + myName;

}

if(!localStorage.getItem('name')) {

    setUserName();

} else {

    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Здесь будут показываться вопросы', + storedName;
}

myButton.onclick = function() {
    setUserName();
}

