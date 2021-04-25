console.log('Script Loaded');

const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
let countValue = document.getElementById("count");
let count = countValue.innerHTML;

// Increase Button
increasebtn.addEventListener("click", function(){
    count++; 
    countValue.style.color = getColor();
    countValue.innerHTML = count;
});

// Reset Button
resetbtn.addEventListener("click", function(){
    count = 0
    countValue.style.color = getColor();
    countValue.innerHTML = 0;
});

// Decrease Button
decreasebtn.addEventListener("click", function(){
    count--;
    countValue.style.color = getColor();
    countValue.innerHTML = count;
});

function getColor(){
    if(count > 0){
       return "green";
    } else 
    if(count < 0){
        return "red";
    } else {
        return "#222";
    }
}