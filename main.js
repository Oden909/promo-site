function animateAndHide() {
    const btn = document.getElementById('animateBtn');
    btn.style.transition = 'transform 0.5s, opacity 0.5s';
    btn.style.transform = 'scale(2)';
    btn.style.opacity = '0';

    setTimeout(() => {
        btn.style.display = 'none';
    }, 500);
}
document.addEventListener('DOMContentLoaded', function() {
    const catItems = document.querySelectorAll('.cat-item');
    catItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transition = 'transform 0.3s';
            this.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
        item.addEventListener('click', function() {
            alert(this.dataset.info);
        });
    });
    if (window.location.pathname.includes('buy.html')) {
        document.addEventListener('keydown', function() {
            const specialOffers = document.getElementById('specialOffers');
            specialOffers.classList.remove('hidden');
        });
    }
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});