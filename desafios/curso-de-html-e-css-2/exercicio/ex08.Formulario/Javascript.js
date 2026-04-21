const senhaicons = document.querySelectorAll('.password-icon');

senhaicons.forEach(icones => {
    icones.addEventListener('click', function (){
        const input = this.parentElement.querySelector('.form-control');
        console.log(input)
        input.type = input.type === 'password'?'text' : 'password';
        this.classList.toggle('fa-eye');
    })
})