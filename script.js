document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});