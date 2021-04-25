console.log('Script Loaded');

const openbtn = document.getElementById('open-btn');
const closebtn = document.getElementById('close-btn');
const modaloverlay = document.querySelector('.modal-overlay');

openbtn.addEventListener('click', function(){
    modaloverlay.classList.add('open-modaloverlay');
});
closebtn.addEventListener('click', function(){
    modaloverlay.classList.remove('open-modaloverlay');
});