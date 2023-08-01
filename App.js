/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');

// ========= MENU SHOW ====================
// if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
// }

// ========== MENU HIDDEN =====================
// if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
// }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.querySelector('.nav-menu');
// when we click on each nav-link we remove the show-menu
navMenu.classList.remove('show-menu') 
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER =============*/
const scrollHeader = () => {
  const header = document.querySelector('.header');
  // when the scroll is greater then 50 viewpoint height, add the scroll-header class 
  this.scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
//  when the scroll is higher than 350 viewpoint innerHeight, add show scroll
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ========*/
// const sections = document.querySelectorAll('section[id]');

// const scrollActive = () => {
//   const scrollY = window.pageYOffset 

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight,
//           sectionTop = current.offsetTop - 58,
//           sectionId = current.getAttribute('id'),
//           sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add('active-link')
//     } else {
//       sectionsClass.classList.remove('active-link')
//     }
//   })


// }
// window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected) 
const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic 
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark 
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) 
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme 
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose 
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ==============*/
 const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true, // Animation repeat
 })

 sr.reveal(`.home-image, .newsletter-container, .footer-logo, .footer-description, .footer-content, .footer-info`,)
 sr.reveal(`.home-data`, {origin: 'bottom'})
 sr.reveal(`.about-data, .recently-data`, {origin: 'left'})
 sr.reveal(`.about-img, .recently-img`, {origin: 'right'})
 sr.reveal(`.popular-card`, {interval: 100})