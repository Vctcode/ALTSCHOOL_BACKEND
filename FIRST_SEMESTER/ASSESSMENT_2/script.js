const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const age = document.getElementById('age');

    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });

    let isValid = true;


    const nameValue = fullName.value.trim();
    const words = nameValue.split(/\s+/);

    if (nameValue === "") {
        alert("Full Name is required");
        return;
    } else if (words.length < 2) {
        alert("Full Name must contain at least two words");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address");
        return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
    }

    const ageValue = parseInt(age.value );
    if (isNaN(ageValue) || ageValue < 18 ) {
        alert("Age must be at least 18 or older");
        return;
    }


    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    } 



})