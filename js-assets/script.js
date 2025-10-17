// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        // Close all accordion items
        accordionHeaders.forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            header.classList.add('active');
            content.classList.add('active');
        }
    });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const thumbnails = document.querySelectorAll('.thumbnail');
const closeBtn = document.querySelector('.close');

// Open lightbox when clicking on thumbnails
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = thumbnail.src;
        lightboxImg.alt = thumbnail.alt;
    });
});

// Close lightbox when clicking the X button
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
    }
});