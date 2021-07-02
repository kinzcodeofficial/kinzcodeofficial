const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

//SHOW ACTIVE WHEN SCROLLING

const highlightMenu = ()=> {
const elem = document.querySelector('.highlight')
const homeMenu = document.querySelector('#home-page')
const aboutMenu = document.querySelector('#about-page')
const myworkMenu= document.querySelector('#mywork-page')
const contactMenu = document.querySelector('#contact-page')
let scrollPos = window.scrollY 

///add ' highlight'  class to menu 
 if(window.innerWidth > 960 && scrollPos < 600) {
     homeMenu.classList.add('highlight');
     aboutMenu.classList.remove('highlight');
     return;
 } else if (window.innerWidth > 960 && scrollPos < 1400) {
     aboutMenu.classList.add('highlight');
     homeMenu.classList.remove('highlight');
     myworkMenu.classList.remove('highlight');
     return;
 } else if (window.innerWidth > 960 && scrollPos < 2345) {
     myworkMenu.classList.add('highlight');
     aboutMenu.classList.remove('highlight');
     contactMenu.classList.remove('highlight');
     return;
 } else if (window.innerWidth > 960 && scrollPos < 5000) {
     contactMenu.classList.add('highlight');
     myworkMenu.classList.remove('highlight');
     return;
 }
 if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
     elem.classList.remove('highlight');
 }


}
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu); 



// close mobile menu

const hideMobileMenu = () => {
    const menuBar = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBar) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



// download resume
$(document).ready(function() {
         $('#resume').click(function(e) {
             e.preventDefault();
             window.location.href = "kinz.pdf";
         });
     });