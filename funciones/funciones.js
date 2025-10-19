// Función que se ejecuta cuando la página termina de cargar
window.addEventListener('load', function() {
    // Verificar si estamos en index.html
    var paginaActual = window.location.pathname;
    
    if (paginaActual.endsWith('index.html') || paginaActual.endsWith('/')) {
        alert('¡Bienvenido a BIRTLH ExpoViajes 2025! 🌍\n\nDescubre los mejores destinos y ofertas de viaje.\n18 de octubre en BEC Bilbao');
    }
});

// Función que hace que el boton oculte y desoculte la tabla cada vez que lo pulsas
function programa() {
    document.getElementById('manana').classList.toggle('oculto');
    document.getElementById('tarde').classList.toggle('oculto');
    document.getElementById('boton').textContent = 
    document.getElementById('manana').classList.contains('oculto') ? 
    'Programa de Mañana' : 'Programa de Tarde';
}

// Función para monstrar un mensage con un boton.
function mostrarMensaje() {
    alert('¡Bienvenido a BIRTLH ExpoViajes 2025! No te pierdas ninguno de nuestros expositores!!.');
}

//Función para calcular el precio de las entradas.
function calcularPrecio() {
    var numEntradas = document.getElementById('numEntradas').value;
    var precioUnitario = 16.50;
    var total = numEntradas * precioUnitario;
                    
    document.getElementById('resultado').innerHTML = 
    numEntradas + ' Entrada(s) = ' + total + ' €';
}

//Función para limpair los campos del formulario.
function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('interes').value = '';
}