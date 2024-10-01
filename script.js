/*----------  ANIMACIÓN HABILIDADES  ----------*/

const skillsSection = document.getElementById('habilidades');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBars=>{
        const value = progressBars.dataset.progress;
        progressBars.style.opacity = 1;
        progressBars.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBars.forEach(p =>{
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll', ()=>{
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress();
    }else{
        hideProgress();
    }
});



/*----------  ANIMACIÓN PROYECTOS  ----------*/


const proyectoContainer = document.getElementById('proyectos');
const proyectoIndividual = proyectoContainer.querySelectorAll('.proyectos__individual');

window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY;
    const proyectoTop = proyectoContainer.offsetTop;

    if (scrollTop >= proyectoTop - 450) {
        proyectoIndividual.forEach(element=>{
            element.classList.add('visible');
        });
    }
});



/*----------  VALIDACIÓN DE FORMULARIO  ----------*/

const nombre = document.getElementById('contacto__nombre');
const email = document.getElementById('contacto__email');
const asunto = document.getElementById('contacto__asunto');
const mensaje = document.getElementById('contacto__mensaje');
const boton = document.getElementById('contacto__boton');
const mensajeErrorNombre = document.querySelector('.input__mensaje--nombre');
const mensajeErrorEmail = document.querySelector('.input__mensaje--email');
const mensajeErrorAsunto = document.querySelector('.input__mensaje--asunto');
const contadorCaracteres = document.getElementById('contador--caracteres');
const formulario = document.querySelector('.contacto__formulario');


/*----------  HABILITAR BOTON AL NO TENER CAMPPOS VACÍOS  ----------*/

const habilitarBoton = ()=>{
    
    let contador = 0;

    if (nombre.value == "") {
        contador++;
    }
    if (email.value == "") {
        contador++;
    }
    if (asunto.value == "") {
        contador++;
    }
    if (mensaje.value == "") {
        contador++;
    }

    if (contador == 0) {
        boton.disabled = false;
    }else{
        boton.disabled = true;
    }
}

nombre.addEventListener("keyup", habilitarBoton);
email.addEventListener("keyup", habilitarBoton);
asunto.addEventListener("keyup", habilitarBoton);
mensaje.addEventListener("keyup", habilitarBoton);



/*----------  VALIDACIÓN DE LOS CAMPOS  ----------*/



const validarCampo = (input, error)=>{
    const tipoCampo = input.dataset.tipo;

    input.addEventListener('input', ()=>{
        switch(tipoCampo){
            case 'nombre':
                if (input.value.length > 50) {
                    error.textContent = 'Máximo 50 caracteres';
                    error.classList.add('visible');
                }else{
                    error.textContent = '';
                    error.classList.remove('visible');
                }
            break;
            case 'asunto':
                if (input.value.length > 50) {
                    error.textContent = 'Máximo 50 caracteres';
                    error.classList.add('visible');
                }else{
                    error.textContent = '';
                    error.classList.remove('visible');
                }
            break;

            case 'email':
                const correoRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
                if (!correoRegex.test(input.value)) {
                    error.textContent = 'Correo electrónico inválido';
                    error.classList.add('visible');
                }else{
                    error.textContent = '';
                    error.classList.remove('visible');
                }
            break;

            case 'mensaje':
                const longitud = input.value.length;
                error.textContent = `${longitud}/300`;

                if (longitud > 300) {
                    input.value = input.value.substring(0,300);
                    error.textContent = 'solo 300 caracteres';
                    error.classList.add('cambioColor');
                }else{
                    error.classList.remove('cambioColor');
                }

        }
    });
}

validarCampo(nombre, mensajeErrorNombre);
validarCampo(asunto, mensajeErrorAsunto);
validarCampo(email, mensajeErrorEmail);
validarCampo(mensaje, contadorCaracteres);


formulario.addEventListener('submit', e=>{
    e.preventDefault();
    formulario.submit();
    formulario.reset();
});