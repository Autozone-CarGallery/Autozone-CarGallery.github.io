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
        const show = document.querySelector('.Alert');
        show.innerHTML = "Passwords do not match! <br> Please Re-enter your password.";
        errorMessage.style.display = "block";
        return false;
    }
    if (password.length < 5) {
        const show = document.querySelector('.Alert');
        show.innerHTML = "Passwords Must be longer than 5 characters! <br> Please Re-enter your password.";
        errorMessage.style.display = "block";
        return false;
    }
}
function goBack() {
    window.history.back();
}
function FullscreenImage() {
    const image = document.getElementById("LogoGif");
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
var PV = true;
function ShowPass() {
    if (PV) {
        const password = get('password');
        const pass = document.querySelector('.Pass');
        pass.textContent = "Password: " + password;
        const show = document.querySelector('.ShowPass');
        show.textContent = "Hide Password";
        PV = false;
    }
    else {
        const pass = document.querySelector('.Pass');
        pass.textContent = "Password:********";
        const show = document.querySelector('.ShowPass');
        show.textContent = "Show Password";
        PV = true;
    }

}
