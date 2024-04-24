
function CheckLogin() {
    if (localStorage.getItem('LoggedIn') === 'true') {
        return true;
    } else {
        window.location.href = "Account/Login.html";
        return false;
    }
}
function CheckLoginin() {
    if (localStorage.getItem('LoggedIn') === 'true') {
        return true;
    } else {
        window.location.href = "../Account/Login.html";
        return false;
    }
}
function Logout() {
    localStorage.setItem('LoggedIn', 'false');
    window.location.href = "../Index.html";

}

function SaveInputs() {
    const Inputusername = document.getElementById('username').value;
    const Inputpassword = document.getElementById('password').value;
    const Inputemail = document.getElementById('email').value;
    localStorage.setItem('username', Inputusername);
    localStorage.setItem('password', Inputpassword);
    localStorage.setItem('email', Inputemail);
    document.getElementById('Re_form').submit();
    localStorage.setItem('LoggedIn', 'true');
}
function CheckInputs() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const savedusername = localStorage.getItem('username');
    const savedpassword = localStorage.getItem('password');
    if (username === savedusername && password === savedpassword) {
        localStorage.setItem('LoggedIn', 'true');
        return true;
    }
    else if (!savedusername) {
        const errorMessage = document.getElementById("ErrorMessage");
        const show = document.querySelector('.Alert');
        show.innerHTML = "Account does not exist. Please register.";
        errorMessage.style.display = "block";
        return false;

    }
    if (username !== savedusername || password !== savedpassword) {  // Use secure comparison for hashed password
        const errorMessage = document.getElementById("ErrorMessage");
        const show = document.querySelector('.Alert');
        show.innerHTML = "Invalid username or password.";
        errorMessage.style.display = "block";
        return false;
    }
    else {
        const errorMessage = document.getElementById("ErrorMessage");
        const show = document.querySelector('.Alert');
        show.innerHTML = "&#9888; Error!!";
        errorMessage.style.display = "block";
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
    SaveInputs();
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


function UserInfo() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

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
        const password = localStorage.getItem('password');
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
function startVideo() {
    const carvid = document.getElementById('carvid');
    carvid.play();
    carvid.playbackRate = 1.5;
}