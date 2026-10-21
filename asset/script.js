// JavaScript untuk interaktivitas
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk card clickable
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
    
    // Fungsi untuk search toggle (sederhana)
    const searchToggle = document.querySelector('.search-toggle');
    if (searchToggle) {
        searchToggle.addEventListener('click', function() {
            // Implementasi sederhana: alert atau redirect ke halaman pencarian
            // Bisa diperluas dengan modal search
            const searchQuery = prompt('Enter your search term:');
            if (searchQuery) {
                window.location.href = `https://sttimothys.org/?s=${encodeURIComponent(searchQuery)}`;
            }
        });
    }
    
    // Smooth scroll untuk anchor links (opsional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Lazy load untuk gambar (opsional, jika ingin menambahkan)
    const images = document.querySelectorAll('img[data-lazy-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy-src');
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-lazy-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Logging untuk konfirmasi (opsional)
    console.log('Website St. Timothy\'s School loaded');
});