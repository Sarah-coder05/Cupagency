document.getElementById('addTestimonialButton').addEventListener('click', addTestimonial);

function addTestimonial() {
    const container = document.getElementById('testimonials-container');
    const testimonial = document.createElement('div');
    testimonial.className = 'testimonial';

    testimonial.innerHTML = `
        <button class="delete-button">&times;</button>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <img src="path/to/image.jpg" alt="Jane Cooper">
        <div class="author">Jane Cooper</div>
        <div class="role">CEO at ABC Corporation</div>
    `;

    testimonial.querySelector('.delete-button').addEventListener('click', function() {
        container.removeChild(testimonial);
    });

    container.appendChild(testimonial);
}
