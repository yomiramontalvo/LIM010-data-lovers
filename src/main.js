/* Manejo del DOM */
const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
    const write = document.getElementById('write').value;
    const pass = document.getElementById('pass').value;
    if (write == "LABORATORIA" && pass == "LABORATORIA") {
        document.getElementById('error').innerHTML = "Cool!!";
    }
    else {
        document.getElementById('error').innerHTML = "Registra bien tu usuario y contraseña"
    }
});