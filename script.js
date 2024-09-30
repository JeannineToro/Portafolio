
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


nombre.addEventListener('input', ()=>{
    if (nombre.value.length > 50) {
        mensajeErrorNombre.textContent = 'Máximo 50 caracteres';
        mensajeErrorNombre.classList.add('visible');
    }else{
        mensajeErrorNombre.textContent = '';
        mensajeErrorNombre.classList.remove('visible');
    }
});


asunto.addEventListener('input', ()=>{
    if (asunto.value.length > 50) {
        mensajeErrorAsunto.textContent = 'Máximo 50 caracteres';
        mensajeErrorAsunto.classList.add('visible');
    }else{
        mensajeErrorAsunto.textContent = '';
        mensajeErrorAsunto.classList.remove('visible');
    }
});

email.addEventListener('input', ()=>{

    const correoRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(email.value)) {
        mensajeErrorEmail.textContent = 'Correo electrónico inválido';
        mensajeErrorEmail.classList.add('visible');
    }else{
        mensajeErrorEmail.textContent = '';
        mensajeErrorEmail.classList.remove('visible');
    }
});