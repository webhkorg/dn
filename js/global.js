window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY >= 1) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});