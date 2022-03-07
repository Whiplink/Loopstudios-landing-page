const openMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.icon--close')
const menu = document.querySelector('.mobile-menu')

const toggleMenu = () => {
  menu.classList.toggle('active')
}

openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)