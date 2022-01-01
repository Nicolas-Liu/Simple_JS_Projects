const btn = document.getElementById('btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.smart-author');

btn.addEventListener('click', function(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.quote;
    })
})
