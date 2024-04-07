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
function get(x) {
    const a = new URLSearchParams(window.location.search);
    return a.get(x);
}

function UserInfo() {
    const username = get('username');
    const email = get('email');

    const welcome = document.querySelector('.Welcome');
    const em = document.querySelector('.Email');

    welcome.textContent = "Welcome, " + username;

    if (em !== null && email !== null) {
        em.textContent = "Email: " + email;
    }
}
window.onload = UserInfo;
function ShowPass() {
    const password = get('password');
    const pass = document.querySelector('.Pass');
    pass.textContent = "Password: " + password;


}