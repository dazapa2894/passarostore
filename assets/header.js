window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.querySelectorAll(".menu-passaro").addEventListener('click', ()=>{
        document.querySelector(".side-nav-menu").classList.toggle("oculto");
    });
});