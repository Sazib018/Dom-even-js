document.getElementById('theam').style.border = '2px solid black'

document.getElementById('theam').addEventListener('click', function () {
    if (document.getElementById('theam').innerText === 'dark') {
        document.getElementById('body').style.backgroundColor = 'black'
        document.getElementById('body').style.color = 'white'
        document.getElementById('theam').style.backgroundColor = 'black'
        document.getElementById('theam').style.color = 'white'
        document.getElementById('theam').style.border = '2px solid white'
        document.getElementById('theam').innerText = 'light'

    }
    else {
        document.getElementById('body').style.backgroundColor = 'white'
        document.getElementById('body').style.color = 'black'
        document.getElementById('theam').style.backgroundColor = 'white'
        document.getElementById('theam').style.color = 'black'
        document.getElementById('theam').style.border = '2px solid black'
        document.getElementById('theam').innerText = 'dark'
    }
})