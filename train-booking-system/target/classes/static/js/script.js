document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * slider.clientWidth}px)`;
    }

    // Auto-slide every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }, 3000);

    // Arrows
    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    });
});
