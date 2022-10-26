//seleccionar elemento y evento del click

// const BotonEnviar = document.querySelector('.boton--primario');
// BotonEnviar.addEventListener('click', function(evento) {
//     console.log(evento)
//    evento.preventDefault();
//     console.log('enviando formulario');
// });







//eventos del los input y del texarea

const datos = {
    nombre :'',
    email :'',
    mensaje : ''
}

const nommbre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);


// evento del sumbit


formulario.addEventListener('submit',function(evento) {
    evento.preventDefault();
    

//validando formulario 

    
 const { nombre, email, mensaje  } = datos;

console.log(nombre);
console.log(email);
console.log(mensaje);

if(nombre ==='' || email===''|| mensaje==='' ) { 

    mostrarError('todos los campos son obligatorios');

    return;  //corta con la funcion si se cumple con la condicion
};


console.log('enviando Formulario');
});

function mostrarError(mensaje) { 

    const error = document.createElement('P');
    error.textContent= mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //desaparecer despues de 3 segundos 
    setTimeout(() =>{
        error.remove()
    }, 3000);

 };


function leerTexto(evento){
    // console.log(e.target.value);
    datos[evento.target.id] = evento.target.value;

    console.log(evento.target);

    console.log(datos);


}

