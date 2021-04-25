console.log('Script Loaded');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');
const colorId = document.querySelector('#color-id'); 

 button.addEventListener("click", function(){
    let hexCode = "#";
    for(let i=0; i<6; i++){
        hexCode += hex[getRandom()]; 
    }
    document.body.style.backgroundColor = hexCode;
    colorId.textContent = hexCode;
 });

 function getRandom(){
    return Math.floor(Math.random()*hex.length);
};
