// option 2 ::
function bgBlackColor() {
document.getElementById('body').style.backgroundColor = 'black';
}

// option 3 ::
const orangeBtn = document.getElementById('bg-orange')
orangeBtn.addEventListener('click', btnClick);      /* don't call the function */

function btnClick() {
    document.getElementById('body').style.backgroundColor = 'orange';
}

// option 3  another way::

const blueColor = document.getElementById('bg-blue')

/* blueColor.addEventListener('click' , function color (){}) */
blueColor.addEventListener('click' , function color (){
    document.getElementById('body').style.backgroundColor = 'blue'
})

// option 4 :. final  '
 /* document.getElementById('bg-aqua').addEventListener('click', function (){}) */

document.getElementById('bg-aqua').addEventListener('click', function (){
    document.getElementById('body').style.backgroundColor = 'aqua'
})


