var enlaces = document.querySelectorAll('.enlace-nav');
var secciones = document.querySelectorAll('.seccion-pagina');
var botonInicio = document.querySelector('.boton-hero');
//var secciones = document.querySelectorAll('.seccion-pagina');


function mostrarSeccion(cualSeccion) {
    
    for(var i=0; i<secciones.length; i++) {
        secciones[i].classList.remove('activo');
    }
    
    
        // muestro solo la que quiero
    var seccion = document.getElementById(cualSeccion);
    seccion.classList.add('activo');
    
    
    for(var i=0; i<enlaces.length; i++){
        enlaces[i].classList.remove('activo');
        if(enlaces[i].getAttribute('data-pagina') == cualSeccion) {
            enlaces[i].classList.add('activo');
        }
    }
    
    window.scrollTo(0,0);
}


for(var i=0; i<enlaces.length; i++) {
    enlaces[i].onclick = function(evento) {
        evento.preventDefault();
        var pag = this.getAttribute('data-pagina');
        mostrarSeccion(pag);
    }
}


if(botonInicio) {
    botonInicio.onclick = function() {
        var pag = this.getAttribute('data-pagina');
        mostrarSeccion(pag);
    }
}

var formulario = document.getElementById('formularioContacto');

if(formulario) {
    formulario.onsubmit = function(evento) {
        evento.preventDefault();
        
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var guitarra = document.getElementById('guitarra').value;
        var mensaje = document.getElementById('mensaje').value;
        
        alert('Gracias ' + nombre + '! Tu mensaje fue enviado correctamente. Te responderemos a ' + email + ' a la brevedad.');
        
        formulario.reset();
    }
}

// para ver si lee bien la pagina
// console.log(cualSeccion);