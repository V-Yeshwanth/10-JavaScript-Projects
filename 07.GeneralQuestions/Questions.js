console.log('Script Loaded');

const plusbtn = document.getElementById('plus-btn');
const content = document.querySelectorAll('.content');

content.forEach(function(content){
    const btn = content.querySelector('.question-btn');
    const hiddedcontent = content.querySelector('.hide-content');
    const minusbtn = content.querySelector('.minus-btn');
    const plusbtn = content.querySelector('.plus-btn');
    btn.addEventListener('click', function(){
        if(hiddedcontent.classList.contains('show-content')){
            plusbtn.classList.remove('hide-plusbtn');
            minusbtn.classList.remove('show-minusbtn');
            hiddedcontent.classList.remove('show-content');
        } else {
            plusbtn.classList.add('hide-plusbtn');
            minusbtn.classList.add('show-minusbtn');
            hiddedcontent.classList.add('show-content');    
        }
    });
});
