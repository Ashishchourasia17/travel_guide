
// img-slider js
let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initialize slider
showSlide(slideIndex);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);


// alert for contact-us
const form=document.querySelector('#form');
form.addEventListener('submit',function(e){
    alert('Message has been sent');
})