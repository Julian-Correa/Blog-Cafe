//seleccionar elemento

const BotonEnviar = document.querySelector('.boton--primario');
BotonEnviar.addEventListener('click', function(evento) {
    console.log(evento)
   evento.preventDefault();
    console.log('enviando formulario');
});
