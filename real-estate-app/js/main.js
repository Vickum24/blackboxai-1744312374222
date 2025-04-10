// Form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
    // Contact form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Basic validation
            let isValid = true;
            
            if (name && !name.value.trim()) {
                isValid = false;
                showError(name, 'Name is required');
            }
            
            if (email && !isValidEmail(email.value)) {
                isValid = false;
                showError(email, 'Please enter a valid email');
            }
            
            if (subject && !subject.value.trim()) {
                isValid = false;
                showError(subject, 'Subject is required');
            }
            
            if (message && !message.value.trim()) {
                isValid = false;
                showError(message, 'Message is required');
            }
            
            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }
    
    // Login form validation
    const loginForm = document.querySelector('form');
    if (loginForm && window.location.pathname.includes('login.html')) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            
            let isValid = true;
            
            if (!isValidEmail(email.value)) {
                isValid = false;
                showError(email, 'Please enter a valid email');
            }
            
            if (!password.value.trim()) {
                isValid = false;
                showError(password, 'Password is required');
            }
            
            if (isValid) {
                // Here you would typically send the login credentials to a server
                alert('Login successful!');
                loginForm.reset();
            }
        });
    }
});

// Helper functions
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const errorDiv = input.nextElementSibling?.classList.contains('error-message') 
        ? input.nextElementSibling 
        : document.createElement('div');
    
    if (!input.nextElementSibling?.classList.contains('error-message')) {
        errorDiv.classList.add('error-message', 'text-red-500', 'text-sm', 'mt-1');
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    
    errorDiv.textContent = message;
    input.classList.add('border-red-500');
    
    // Remove error after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
        input.classList.remove('border-red-500');
    }, 3000);
}
