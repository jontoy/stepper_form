const form = document.querySelector('form');
const verifyDisplays = document.querySelectorAll('.verify-data');

document.querySelector('#form-start').addEventListener('click', (e) => {
    form.hidden = false;
})
form.addEventListener('click', (e) => {
    if(e.target.classList.contains('step')){
        document.querySelector(e.target.dataset.target).hidden = false;
        e.target.parentElement.hidden = true;
    }
    if(e.target.classList.contains('verify-step')){
        for (display of Array.from(verifyDisplays)){
            display.innerText = document.querySelector(display.dataset.source).value;
        }
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username-input').value
    const password = document.querySelector('#password-input').value
    const color = document.querySelector('#color-input').value
    console.log(`new user {username:${username}, password:${password}, color:${color}} created!`);
    form.querySelector('.input-container').hidden = false;
    form.firstElementChild.lastElementChild.hidden = true;
    form.reset();
    form.hidden = true;
})