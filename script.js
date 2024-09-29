
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