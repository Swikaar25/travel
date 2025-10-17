// Accordion
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        // Hide all other panels
        document.querySelectorAll('.accordion-content').forEach(panel => {
            if (panel !== content) {
                panel.style.display = 'none';
            }
        });
        // Toggle current panel
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});