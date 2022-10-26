//seleccionar elemento y evento del click

const BotonEnviar = document.querySelector('.boton--primario');
BotonEnviar.addEventListener('click', function(evento) {
    console.log(evento)
   evento.preventDefault();
    console.log('enviando formulario');
});

//eventos del los input y del texarea

const datos = {
    nombre :'',
    email :'',
    mensaje : ''
}

const nommbre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

function leerTexto(evento){
    // console.log(e.target.value);
    datos[evento.target.id] = evento.target.value;

    console.log(evento.target);

    console.log(datos);


}