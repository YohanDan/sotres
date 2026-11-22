const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Alterna el texto entre ☰ y ✕
    if (navMenu.classList.contains('active')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});

// Cerrar el menú automáticamente al tocar cualquier opción
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");
    const scroll = window.scrollY;

    if(scroll <= 150){

        let opacity = scroll / 150;

        navbar.style.background =
        `rgba(7,39,63,${opacity})`;

    }else{

        navbar.style.background =
        "rgba(7,39,63,1)";

    }

});

document.addEventListener("DOMContentLoaded", function() {
    const secciones = document.querySelectorAll(".seccion-animada");

    const observador = new IntersectionObserver((entradas, obs) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("animar");
                obs.unobserve(entrada.target);
            }
        });
    }, {
        rootMargin: "0px 0px -10px 0px", // Negativo para que espere a que bajes más en la sección
        threshold: 0.3 // Se activa cuando al menos el 30% de la sección ya está a la vista
    });

    secciones.forEach(seccion => {
        observador.observe(seccion);
    });
});

/* SERVICIO */

const boton = document.getElementById("btn-ver-mas");
const extras = document.querySelectorAll(".extra");

boton.addEventListener("click", () => {

    extras.forEach(item => {
        item.classList.toggle("mostrar");
    });

    if (boton.textContent === "Ver menos") {
        boton.textContent = "Ver más";
    } else {
        boton.textContent = "Ver menos";
    }

});