document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('ageError').textContent = '';

    // Get form values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();


    let isValid = true;
    if(age<0){
        isValid = false;
        document.getElementById('ageError').textContent = 'Age should be a non-negative integer.';
    }

    // Validate name (not empty)
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email (basic pattern check)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // If form is valid, submit the form or display a success message
    if (isValid) {
        alert('Form is valid and ready to be submitted!');
    }
});