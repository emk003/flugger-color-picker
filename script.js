
    function setColor(color) {
    document.getElementById('colorLayer').style.backgroundColor = color;
}


    function changeWallColor(hex) {
        document.getElementById("colorMask").style.filter = `brightness(0) saturate(100%) sepia(1) hue-rotate(180deg)`; // or use an SVG fill version
    }

    let isDay = true;

    function toggleDayNight() {
        const image = document.getElementById('mainImage');
        const slider = document.getElementById('slider');

        isDay = !isDay;

        image.src = isDay ? 'foto/Frame 58.jpg' : 'foto/Group 115.jpg'; // Update path if needed
        slider.style.left = isDay ? '2px' : '44px';
        slider.style.backgroundColor = isDay ? 'orange' : 'black';
    }


    const popup = document.getElementById("popup");
    const popupBtn = document.getElementById("popupBtn");

    popupBtn.addEventListener("click", () => {
        popup.classList.toggle("visible");
    });





