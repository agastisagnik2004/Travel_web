document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const searchForms = document.querySelectorAll('.search-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            // Remove active class from all buttons and forms
            tabButtons.forEach(btn => btn.classList.remove('active'));
            searchForms.forEach(form => form.classList.remove('active'));

            // Add active class to clicked button and corresponding form
            button.classList.add('active');
            document.getElementById(`${tab}-form`).classList.add('active');
        });
    });

    // Set default active tab (bus)
    document.querySelector('.tab-btn[data-tab="bus"]').classList.add('active');
    document.getElementById('bus-form').classList.add('active');

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Prevent form submission (for demo purposes)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submission is disabled for this demo.');
        });
    });
});