
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkwork = document.querySelectorAll('.work__item')

function activeWork() {
    linkwork.forEach(i => i.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(i => i.addEventListener('click', activeWork))
