document.getElementById('form-registro').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombreAdopcion').Value.trim();
    const correo = document.getElementById('correoAdopcion').Value.trim();
    const des

    if (!nombre || !correo || ) {
        alert('por favor, complete todos los campos.');
        return;
    }

    const imgPermitidas = ['image/jpeg', 'image/png'];
    if (!imgPermitidas.includes(imagen.type)) {
        alert('por favor, suba una imagen en formato Jpg o PNG.');
        return;
    }
    
    alert('formulario enviado correctamente.');

}) 