document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "/assets/img/header_bg_1.jpg",
        "/assets/img/header_bg_2.jpg"
    ];
    
    document.querySelector(".hero > img").setAttribute("src", images[Math.floor(Math.random() * 2) % images.length]);
});