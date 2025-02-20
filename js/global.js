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

const totalImages = 11;
let loadedImages = 0;

function closeLoading() {
    document.getElementById('loadingWrap').classList.add("d-none");
}

function updateProgress() {
    loadedImages++;
    console.log(loadedImages);
    const progressPercentage = (loadedImages / totalImages) * 100;
    document.getElementById('progress').style.width = progressPercentage + '%';

    if (loadedImages === totalImages) {
        setTimeout(() => {
            closeLoading();
        }, 500);
    }
}

function imgLoad(img, callback) {
    var timer = setInterval(function () {
        if (img.complete) {
            callback(img);
            clearInterval(timer);
        }
    }, 50);
}

function preloadImages() {
    const images = [
        'images/home/roles.gif',
        'images/home/kaKaLineQRCode.jpg',
        'images/home/samLineQRCode.jpg',
        'images/home/instantNews.png',
        'images/home/paperWingsBattle.png',
        'images/home/melomons.png',
        'images/home/ridingBeasts.png',
        'images/home/catBuns.png',
        'images/home/attributes.png',
        'images/visual.jpg',
        'images/visualMobile.jpg'
    ];
    images.forEach(image => {
        const img = new Image();
        img.src = image;
        imgLoad(img, function () {
            updateProgress();
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {

    if (document.title == "闇闇快訊"){
        window.addEventListener('load', preloadImages());
    }

    if(document.getElementById("date")){
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1) + "月";
        const day = String(date.getDate()).padStart(2, '0');
        document.getElementById('dateDay').innerText = day;
        document.getElementById('dateMonth').innerText = month;
        
        fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FHong_Kong')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dateDay').innerText = String(data.day).padStart(2, '0');
            document.getElementById('dateMonth').innerText = String(data.month) + "月";
        })
        .catch(error => {
        });
    }

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
    if (document.querySelector('.dateChecker')) {
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
    if (document.getElementById('visual')) {
        window.onload = adjustHeight;
        window.onresize = adjustHeight;
        adjustHeight();
    }
});