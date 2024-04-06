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

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        return false;
    }
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
    }, 3000);

}
function Show(x) {
    var words = document.getElementsByClassName("ProfileContainer");
    for (var i = 0; i < words.length; i++) {
        if (words[i].id === x) {
            words[i].style.display = "inline-block";
        } else {
            words[i].style.display = "none";
        }
    }
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function Info() {
    const username = getQueryParam('username');
    const welcomeHeader = document.querySelector('.Welcome');
    welcomeHeader.textContent = "Welcome, " + username;
}
window.onload = Info;