const menuToggle = document.querySelector('.toggle_button')
const showCase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showCase.classList.toggle('active')
});