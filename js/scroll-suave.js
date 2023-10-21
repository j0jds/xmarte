
const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');


export function ScrollTop(event) {
    event.preventDefault();

    const href = event.currentTerget.getAtribute('href');

    const ancora = document.querySelector(href);

    ancora.scrollIntroView({
        behavior: 'smooth',
        block: 'start',
    })

}

linkInterno.addEventListener('click, ScrollTop');











