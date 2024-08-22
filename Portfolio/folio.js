

document.addEventListener('DOMContentLoaded', () => {
    

    const menuToggle = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    function toggleMenu() {
        menuToggle.classList.toggle('open');
    }

    function closeMenu() {
        menuToggle.classList.remove('open');
    }


    document.querySelector('.navbar').addEventListener('click', toggleMenu);


    navLinks.forEach(link => link.addEventListener('click', closeMenu));
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    const contentDiv = document.querySelector('.main-content');
    const pages = ['about-me.html', 'assignment.html', 'skills.html', 'contact.html'];
    const defaultPage = 'index.html';

    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('href');
            loadContent(page);
            history.pushState(null, null, page);
        });
    });

    
    loadContent(defaultPage);

    
    function initPage() {
    
        toggleMenu();
        smoothScroll();
        loadContent(defaultPage);
    }

    initPage();
});
    

document.querySelectorAll('.main-image').forEach(image => {
    image.addEventListener('click', function() {
        const nestedImages = this.nextElementSibling;
        if (nestedImages.style.display === 'none') {
            nestedImages.style.display = 'block';
        } else {
            nestedImages.style.display = 'none';
        }
    });
});
