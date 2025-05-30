// Función para desplazarse al inicio de la página
// Esta función se utiliza para llevar al usuario al inicio de la página con un desplazamiento suave.
function scrollToTop() {
    window.scrollTo({ 
        top: 0, // Posición vertical en píxeles (0 significa la parte superior de la página)
        behavior: 'smooth' // Habilita el desplazamiento suave
    });
}

// Función para habilitar desplazamiento suave en enlaces de anclaje
// Esta función selecciona todos los enlaces que comienzan con "#" (enlaces de anclaje) y les agrega un comportamiento personalizado.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Agrega un evento "click" a cada enlace de anclaje
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace (saltos bruscos)

        // Obtiene el elemento objetivo al que apunta el enlace
        const target = document.querySelector(this.getAttribute('href'));

        // Define un desplazamiento adicional para compensar la altura de la barra de navegación fija
        const offset = 80; // Altura en píxeles de la barra de navegación (ajustar según sea necesario)

        // Calcula la posición del elemento objetivo menos el desplazamiento
        const targetPosition = target.offsetTop - offset;

        // Desplaza la página a la posición calculada con un efecto suave
        window.scrollTo({
            top: targetPosition, // Posición vertical calculada
            behavior: 'smooth' // Habilita el desplazamiento suave
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("cantidad-taza1");

    for (let i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulación de autenticación
    if (email === "usuario@ejemplo.com" && password === "123456") {
        alert("Inicio de sesión exitoso");
        $('#loginModal').modal('hide'); // Cierra el modal
    } else {
        alert("Correo o contraseña incorrectos");
    }
});

$('#loginModal').on('show.bs.modal', function () {
    // Limpia los campos del formulario de inicio de sesión
    document.getElementById('loginForm').reset();
});

$('#registerModal').on('show.bs.modal', function () {
    // Limpia los campos del formulario de registro
    document.getElementById('registerForm').reset();
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Validación básica
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Simulación de registro exitoso
    alert(`Registro exitoso para ${name}`);
    $('#registerModal').modal('hide'); // Cierra el modal
});

document.getElementById('openRegisterModal').addEventListener('click', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Cierra el modal de Iniciar Sesión
    $('#loginModal').modal('hide');

    // Espera a que el modal de Iniciar Sesión se cierre completamente
    $('#loginModal').on('hidden.bs.modal', function () {
        // Abre el modal de Registro
        $('#registerModal').modal('show');
        // Elimina el evento para evitar múltiples ejecuciones
        $(this).off('hidden.bs.modal');
    });
});

document.getElementById('openLoginModal').addEventListener('click', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Cierra el modal de Registro
    $('#registerModal').modal('hide');

    // Espera a que el modal de Registro se cierre completamente
    $('#registerModal').on('hidden.bs.modal', function () {
        // Abre el modal de Iniciar Sesión
        $('#loginModal').modal('show');
        // Elimina el evento para evitar múltiples ejecuciones
        $(this).off('hidden.bs.modal');
    });
});