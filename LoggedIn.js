function CheckLogin() {
    var LoggedIn = false;
    if (LoggedIn) {
        return true;
    } else {
        window.location.href = "Account/Login.html";
        return false;
    }
}

function CheckPassword() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("PasswordConfirm");
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const errorMessage = document.getElementById("ErrorMessage");
    errorMessage.textContent = "";

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match! Please Re-enter your password.";
        return false;
    } console.log("Passwords match! Form can be submitted.");
    return true;
}
function goBack() {
    window.history.back();
}
function FullscreenImage() {
    const image = document.getElementById("Logo");
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
    setTimeout(() => {
        image.style.display = 'none';
    }, 1500);
}