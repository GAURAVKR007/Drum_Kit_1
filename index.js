 for(let i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handClick);
 }
function handClick() {
    alert("I am Clicked");
}