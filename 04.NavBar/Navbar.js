console.log('Script Loaded');

const togglebtn = document.getElementById('toggle-btn')
const centercontainer = document.querySelector('.center-container');

togglebtn.addEventListener('click', function(){
    // console.log(centercontainer.classList);
    // console.log(centercontainer.classList.contains('random'));    
    // console.log(centercontainer.classList.contains('center-container'));    
    // if(centercontainer.classList.contains('show-listscontainer')){
    //     centercontainer.classList.remove('show-listscontainer');
    // } else {
    //     centercontainer.classList.add('show-listscontainer');
    // }
    centercontainer.classList.toggle('show-listscontainer');
}); 
