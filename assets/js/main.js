/*== SHOW MENU ==*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    menu = document.getElementById(navId);

    // Validate that variables exist
    if(toggle && menu){
        // We add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show-menu");
        });
    };
};
showMenu("nav-toggle", "nav-menu");

/*== REMOVE MENU MOBILE ==*/
const navLink = document.querySelectorAll(".nav__link"),
    navMenu = document.getElementById("nav-menu");

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};

navLink.forEach(n => n.addEventListener("click", linkAction));

/*== SCROLL SECTIONS ACTIVE LINK ==*/
const sections = document.querySelectorAll("section[id]");

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
            sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active-link");
            }else{
                document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active-link");
            };
    });
};
window.addEventListener("scroll", scrollActive);

/*== CHANGE BACKGROUND HEADER ==*/
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*== SHOW SCROLL TOP ==*/
window.onscroll = () => {
    const scrollTop = document.getElementById("scroll-top")
    // When the scroll is heigher than 560 viewport height, add the show -scroll class to the (a) tag with the scrolltop class 
    if(this.scrollY >= 560) scrollTop.classList.add("scroll-top"); 
    else scrollTop.classList.remove("scroll-top");
};

/*==-- DARK / LIGHT  THEME --==*/
const themeBtn = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we abtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// we validate if the user previsouly choose a topic
if(selectedTheme){
    // If the validation is fulfilled, we ask that the issue was it know if we activated or deactivated the dark 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeBtn.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==-- SCROLL REVEAL ANIMATION --==*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal('.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, app__data, .app__img, .contact__data, .contact__btn, .footer__content', {
    interval: 200
})