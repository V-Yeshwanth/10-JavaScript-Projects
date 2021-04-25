console.log('Script Loaded');

const content = [
    {
        id: 0,
        name: 'history',
        content: 'History ipsum dolor, sit amet consectetur adipisicing elit. Voluptates esse ipsa aut praesentium sunt temporibus ab odit? Sint saepe vero culpa quod eum natus delectus, repellat facere fugit quam voluptatem maiores nobis magnam doloribus aut maxime? Ex, enim neque. Non.History ipsum dolor, sit amet consectetur adipisicing elit. Voluptates esse ipsa aut praesentium sunt temporibus ab odit? Sint saepe vero culpa quod eum natus delectus, repellat facere fugit quam voluptatem maiores nobis magnam doloribus aut maxime? Ex, enim neque. Non.',
    },
    {
        id: 1,
        name: 'vision',
        content: 'Vision ipsum dolor, sit amet consectetur adipisicing elit. Voluptates esse ipsa aut praesentium sunt temporibus ab odit? Sint saepe vero culpa quod eum natus delectus, repellat facere fugit quam voluptatem maiores nobis magnam doloribus aut maxime? Ex, enim neque. Non.',
    },{
        id: 2,
        name: 'goals',
        content: 'Goals ipsum dolor, sit amet consectetur adipisicing elit. Voluptates esse ipsa aut praesentium sunt temporibus ab odit? Sint saepe vero culpa quod eum natus delectus, repellat facere fugit quam voluptatem maiores nobis magnam doloribus aut maxime? Ex, enim neque. Non.lrem the main maiord Exm enimn is Snint deletucs',
    }
];

const btns = document.querySelectorAll('.tab-btn');
// console.log(btns);
const contentContainer = document.querySelector('.content-container');
// console.log(contentContainer);
function getContent(item){
    let actualContent = content[item];
    contentContainer.innerHTML = actualContent.content;
    // console.log(actualContent)
}

const historybtn = document.getElementById('history');
const visionbtn = document.getElementById('vision');
const goalsbtn = document.getElementById('goals');
btns.forEach(function(items){
    // const btn = document.querySelector('.tab-btn');
    items.addEventListener('click', function(e){
        const btnPressed = e.target.dataset.id;
        getContent(btnPressed);
    });
})

historybtn.addEventListener('click', function(){
    historybtn.style.background = "#fff";
    visionbtn.style.background = "hsl(212, 33%, 89%)";
    goalsbtn.style.background = "hsl(212, 33%, 89%)";
}); 
visionbtn.addEventListener('click', function(){
    visionbtn.style.background = "#fff";
    historybtn.style.background = "hsl(212, 33%, 89%)";
    goalsbtn.style.background = "hsl(212, 33%, 89%)";
}); 
goalsbtn.addEventListener('click', function(){
    goalsbtn.style.background = "#fff";
    visionbtn.style.background = "hsl(212, 33%, 89%)";
    historybtn.style.background = "hsl(212, 33%, 89%)";}); 