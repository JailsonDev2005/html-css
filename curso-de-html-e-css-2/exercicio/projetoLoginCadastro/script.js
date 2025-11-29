const Container = document.querySelector('.container');
const CadastrarBtn = document.querySelector('.Cadastrar-btn');
const LoginBtn = document.querySelector('.login-btn');

CadastrarBtn.addEventListener('click', () => {
    Container.classList.add('active')
})

LoginBtn.addEventListener('click', () => {
    Container.classList.remove('active')
})