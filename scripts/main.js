var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc==='images/my01.jpg'){
        myImage.setAttribute ('src','images/my02.jpg');
    }else{
        myImage.setAttribute ('src','images/my01.jpg');
    }
}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
    var myName=prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML='It\'s vary cool, '+myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}