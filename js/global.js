window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY >= 1) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('menu') && document.getElementById('menuOpenButton')) {
        const menu = document.getElementById('menu');
        const menuOpenButton = document.getElementById('menuOpenButton');
        const menuCloseButton = document.getElementById('menuCloseButton');
        menuOpenButton.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
        menuCloseButton.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    }
});