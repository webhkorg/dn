function adjustHeight() {
    var visualElement = document.getElementById('visual');
    visualElement.style.height = window.innerHeight + 'px';
}

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
    if(document.querySelector('.dateChecker')){
        const dateDivs = document.querySelectorAll('.dateChecker');
        dateDivs.forEach(dateDiv => {
            const year = parseInt(dateDiv.children[0].textContent);
            const month = parseInt(dateDiv.children[1].textContent.split('月')[0]);
            const day = parseInt(dateDiv.children[1].textContent.split('月')[1].split('日')[0]);
            const eventDate = new Date(year, month - 1, day);
            const eventPeriod = new Date(year, month - 1, day);
            eventPeriod.setDate(eventDate.getDate() + 7);
            const today = new Date();
            if (today >= eventDate && today < eventPeriod) {
                dateDiv.classList.add('mark');
            }
        });
    }
    if (document.getElementById('visual')){
        window.onload = adjustHeight;
        window.onresize = adjustHeight;
        adjustHeight();
    }
});