// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .hero a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // Close mobile menu if open
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                    }
                    
                    // Scroll to section
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    document.querySelectorAll('nav a').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
                    document.querySelector(`nav a[href="${href}"]`).classList.add('active');
                }
            }
        });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});