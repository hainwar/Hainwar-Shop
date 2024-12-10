// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').replace('.html', '');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy Loading for Images
const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('load', () => {
        image.style.opacity = 1;
    });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
