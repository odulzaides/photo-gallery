function changeBg() {
    const images = [
        'url(../../assets/AshokanReservoir_.jpg',
        '../../assets/ventura-sunset.jpg',
        '../../assets/ionCanyonFromWestRim.jpg'
    ]
    const bodySelector = document.querySelector('#test');
    const bg = images[Math.floor(Math.random() * images.length)];
    bodySelector.style.backgroundImage = bg;
    console.log("background changed")
}
setInterval(changeBg, 1000);