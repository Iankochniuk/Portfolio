document.addEventListener('DOMContentLoaded', () => {
  const navResponsive = document.querySelector('.nav-reponsive'); 
const navMenu = document.querySelector('#nav ul'); 


navResponsive.addEventListener('click', () => {
    
    navMenu.classList.toggle('activo');

    const icon = navResponsive.querySelector('i');
    icon.classList.toggle('fa-bars'); 
    icon.classList.toggle('fa-times'); 
}); 
});