
// Menu Show 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    icon = document.querySelector('#navicon')
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            toggle.classList.toggle('close-toggle')
            icon.classList.toggle('bx-x')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    icon = document.querySelector('#navicon')

    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    icon.classList.toggle('bx-x')


}
navLink.forEach (n => n.addEventListener('click', linkAction))

// Scroll sections Active Link
const sections = document.querySelectorAll('sections[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute ('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a [href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a [href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ---------------- CHANGE BACKGROUND HEADER ---------------- 
function scrollHeader(){
    const nav = document.getElementById('header')
    //When the scroll is greater than 200 viewport height, add the scroll-header class
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

// ---------------- SHOW SCROLL TOP ---------------- 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


// ---------------- DARK / LIGTH THEME ---------------- 

const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obteain the current theme that the interface has by validating the dark-theme 
const getCurrentTheme = ()=> document.body.classList.contains(darktheme) ? 'dark': 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'bx-moon': 'bx-sun'

// We obteain the current theme that the interface has by validating the dark-theme 
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)

    // Guardamos el theme que uso el usuario antes
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())

})

// ---------------- SCROLL REVEAL ANIMATION ---------------- 
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
    .about__data, about__img,
    .services__content,
    .menu__content,
    .app__data, .app__img,
    .contact__data, .contact__button,
    .footer__content,
    .testimonial__box,
    iframe,
    .contact-information`,  {
    interval: 200
})
