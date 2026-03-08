// Simple button interaction + slider

document.addEventListener("DOMContentLoaded", function () {

    const donateBtn = document.querySelector('.btn-primary');
    const volunteerBtn = document.querySelector('.btn-outline');

    if (donateBtn) {
        donateBtn.addEventListener('click', function () {
            alert("Thank you for choosing to donate food! 💛");
        });
    }

    if (volunteerBtn) {
        volunteerBtn.addEventListener('click', function () {
            alert("Welcome to the Food Hero community! 💚");
        });
    }

    // Slider code
    const slides = document.querySelectorAll(".slide");
    let current = 0;

    if (slides.length > 0) {
        slides[0].classList.add("active");

        function nextSlide() {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }

        setInterval(nextSlide, 4000); // change every 4 seconds
    }

});

const buttons = document.querySelectorAll(".register-btn");

buttons.forEach(btn => {
btn.addEventListener("click", () => {
alert("You have registered for this event! 🎉");
});
});

