/* document.querySelector('.nav-item').addEventListener('click', function(event) {
    var pageName = event.target.getAttribute('href').substring(1); 
    fetch('pages/' + pageName + '.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#' + pageName).innerHTML = data;
        });
}) */;