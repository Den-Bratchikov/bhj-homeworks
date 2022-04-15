const link = document.getElementsByClassName('menu__link')

const linkActive = link.closest('.menu_sub')

link.onclick = () => {
    console.log(1)
    //linkActive.classList.add('menu_active')
}

