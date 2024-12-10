// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');

        // Pastikan hanya menangani navigasi internal
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1); // Menghapus '#' dari href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
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

// Menutup Menu Setelah Klik di Mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
