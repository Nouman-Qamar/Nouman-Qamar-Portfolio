let currentSlide = 0;
const carousel = document.querySelector('.carousel');
const projectItems = document.querySelectorAll('.project-item');
const totalSlides = projectItems.length;

function moveSlide(direction) {
    currentSlide += direction;
    
    // Ensure circular navigation
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateCarousel();
}

function updateCarousel() {
    const itemWidth = projectItems[0].offsetWidth + 30; // 30px for margins
    carousel.style.transform = `translateX(${-currentSlide * itemWidth}px)`;
}

// Initialize carousel
updateCarousel();

// Adjust carousel on window resize
window.addEventListener('resize', updateCarousel);

// Add event listeners to arrow buttons
document.querySelector('.arrow-btn.left').addEventListener('click', () => moveSlide(-1));
document.querySelector('.arrow-btn.right').addEventListener('click', () => moveSlide(1));

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
