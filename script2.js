document.addEventListener('DOMContentLoaded', () => {
    btn1.style.transform = 'scale(0)';
    btn2.style.transform = 'scale(0)';
    btn3.style.transform = 'scale(0)';

    // image hover
    const links = document.querySelectorAll('.hover-link');
    const hoverImage = document.getElementById('hover-image');

    links.forEach(link => {
    // On mouse enter (hover start)
    link.addEventListener('mouseenter', () => {
        const imageUrl = link.getAttribute('data-image');
        if (imageUrl) {
        hoverImage.src = imageUrl;
        hoverImage.style.display = 'block';
        }
    });

    // On mouse leave (hover end)
    link.addEventListener('mouseleave', () => {
        hoverImage.style.display = 'none';
    });

    // Update image position on mouse move
    link.addEventListener('mousemove', (e) => {
        // Position the image below and slightly offset from the cursor
        hoverImage.style.left = `${e.clientX + 10}px`; // Offset to the right
        hoverImage.style.top = `${e.clientY + 20}px`;  // Offset below
    });
    });
})