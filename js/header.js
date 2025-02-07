document.write(`
    <div id="header" class="shadow z-1 top-0 bg-dark text-light w-100 p-2 d-flex align-items-center">
    <a id="menuOpenButton">
        <i class="bi bi-list h1 text-light me-1"></i>
    </a>
    <a href="index.html"><img src="images/icon.png" class="me-2" style="max-width: 32px;"></a>
    <h3 class="p-0 m-0">
    `
    + document.title +
    `
    </h3>
    </div>
    <div id="menu" class="z-1">
    <a id="menuCloseButton">
        <i class="bi bi-x-lg h1 text-light"></i>
    </a>
    <div class="p-3 d-flex align-items-center">
        <a href="index.html"><img src="images/icon.png" class="me-2" style="max-width: 32px;"></a>
        闇闇快訊
    </div>
    <ul class="p-0 m-0 pt-3 pb-3 mt-3">
        <li><a href="instantNews.html">即時快訊</a></li>
        <li><a href="paperWingsBattle.html">紙翼大作戰</a></li>
        <li><a href="melomons.html">麥樂獸</a></li>
        <li><a href="ridingBeasts.html">騎行獸</a></li>
        <li><a href="catBuns.html">貓貓包</a></li>
        <li><a href="attributes.html">初學者屬性指南</a></li>
    </ul>
    </div>
`);