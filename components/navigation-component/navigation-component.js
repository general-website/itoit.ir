const links = document.querySelectorAll('.nav-item');
const currentUrl = window.location.pathname.split('/').pop() || 'index';

links.forEach(link => {
    if (link.getAttribute('href').includes(currentUrl)) {
        link.classList.add('active');
    }
});