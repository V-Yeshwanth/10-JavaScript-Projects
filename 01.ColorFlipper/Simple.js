console.log('Script Loaded');
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const colorId = document.querySelector('#color-id'); 

 button.addEventListener("click", function(){
    let randomNumber = getRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    colorId.textContent = colors[randomNumber];
 });

 function getRandom(){
   return Math.floor(Math.random()*colors.length);
 };