var cancel = document.getElementById("cancel-button")
var messageBox =  document.getElementById("message")
var indi = document.getElementById("arrow")
var text = document.getElementById("text")
cancel.addEventListener("click",disappear)
function disappear(){
    messageBox.style.display = "none"
    indi.style.display = "none"
 }
 text.addEventListener("mouseover",yellow)
text.addEventListener("mouseout",mouseOut)
 function yellow(){
    text.style.color = "rgb(232, 232, 0)"
 }
 function mouseOut(){
    text.style.color = "black"
 }