console.log('Script Loaded');

const togglebtn = document.getElementById('toggle-btn');
const leftblock = document.querySelector('.left-block');
const closebtn = document.querySelector('.close-btn'); 

togglebtn.addEventListener('click', function(){
    // console.log(leftblock.classList);
    // console.log(leftblock.classList.contains('show-leftblock'));
    // console.log(leftblock.classList.contains('left-block'));
    leftblock.classList.toggle('show-leftblock');
});
closebtn.addEventListener('click', function(){
    leftblock.classList.toggle('show-leftblock');
});