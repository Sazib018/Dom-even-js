document.getElementById('post').addEventListener('click', function () {
    const sectionP = document.getElementById('articale-section')
    const text = document.getElementById('content').value;
    const articale = document.createElement('articale')
    articale.innerText = text ;
    articale.style.marginBottom = '15px';
    sectionP.appendChild(articale)
    document.getElementById('content').value = '';
})