// navbar open

const toggleButton = document.querySelector('.toggle_button');
const navLinks = document.querySelectorAll('.links');

toggleButton.addEventListener('click', () =>  {
    document.body.classList.toggle('nav_open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav_open');
    })
})


// download resume
$(document).ready(function() {
         $('#resume').click(function(e) {
             e.preventDefault();
             window.location.href = "TECHRESUME.pdf";
         });
     });