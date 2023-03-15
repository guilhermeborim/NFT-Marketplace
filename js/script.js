
const menuButton = document.querySelector('#burguer-menu');
const menuList = document.querySelector('.nav-profile')


function openMenu(event) {
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
}


menuButton.addEventListener('click', openMenu)
