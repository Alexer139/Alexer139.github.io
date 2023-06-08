
// document.getElementById('message-form').addEventListener('submit', function(event) {
//   event.preventDefault();   //чтобы было не по дефолту

//   var messageInput = document.getElementById('message-input');
//   var message = messageInput.value;


//   var xhr = new XMLHttpRequest();
  
//   xhr.open('Post', 'save_message.php', true);
//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(xhr.responseText);
//       messageInput.value = ''  //просто очистка
//     }
//   };
//   xhr.send('message' + encodeURIComponent(message));
// });



var button1 = document.getElementById("btn1");        //1111111111
var text1 = document.getElementById("txt1");

button1.addEventListener("click", function() {
  if (text1.style.display === "none") {
    text1.style.display = "inline-block";
  } else {
    text1.style.display = "none";
  }
});

var button2 = document.getElementById("btn2");       //2222222222222
var text2 = document.getElementById("txt2");

button2.addEventListener("click", function() {
  if (text2.style.display === "none") {
    text2.style.display = "inline-block";
  } else {
    text2.style.display = "none";
  }
});

var button3 = document.getElementById("btn3");       //3333333333333
var text3 = document.getElementById("txt3");

button3.addEventListener("click", function() {
  if (text3.style.display === "none") {
    text3.style.display = "inline-block";
  } else {
    text3.style.display = "none";
  }
});

var button4 = document.getElementById("btn4");          ////444444444444444
var text4 = document.getElementById("txt4");

button4.addEventListener("click", function() {
  if (text4.style.display === "none") {
    text4.style.display = "inline-block";
  } else {
    text4.style.display = "none";
  }
});

var button5 = document.getElementById("btn5");           //555555555555555555
var text5 = document.getElementById("txt5");

button5.addEventListener("click", function() {
  if (text5.style.display === "none") {
    text5.style.display = "inline-block";
  } else {
    text5.style.display = "none";
  }
});

var button6 = document.getElementById("btn6");          //666666666666666666
var text6 = document.getElementById("txt6");

button6.addEventListener("click", function() {
  if (text6.style.display === "none") {
    text6.style.display = "inline-block";
  } else {
    text6.style.display = "none";
  }
});

var button7 = document.getElementById("btn7");         //7777777777777
var text7 = document.getElementById("txt7");

button7.addEventListener("click", function() {
  if (text7.style.display === "none") {
    text7.style.display = "inline-block";
  } else {
    text7.style.display = "none";
  }
});

var button8 = document.getElementById("btn8");         //8888888888888888
var text8 = document.getElementById("txt8");

button8.addEventListener("click", function() {
  if (text8.style.display === "none") {
    text8.style.display = "inline-block";
  } else {
    text8.style.display = "none";
  }
});


