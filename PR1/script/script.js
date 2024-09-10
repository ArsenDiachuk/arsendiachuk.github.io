function togglePasswordVisibility(passwordId, togglePassword, img1, img2) {
    const passwordField = document.getElementById(passwordId);
    const toggleElement = document.getElementById("togglePassword");

    toggleElement.addEventListener('click', function () {

        if (passwordField.type == 'password') {
            passwordField.type = 'text';
            toggleElement.src = img2;
        } else {
            passwordField.type = 'password';
            toggleElement.src = img1;
        }
    });
}

togglePasswordVisibility('password', 'togglePassword', 'images/Screenshot_6.jpg', 'images/Screenshot_7.jpg');