const container = document.querySelector('.container-box');
const login = document.querySelector('.cadastro-link');
const cadastro = document.querySelector('.login-link');

cadastro.addEventListener('click',()=>{
    container.classList.add('active');
})

login.addEventListener('click',()=>{
    container.classList.remove('active');
})