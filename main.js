
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
    window.location.href = "../index.html";

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
    if (username !== savedusername || password !== savedpassword) {
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
var AW = true;
function Arrow() {
    const Arrow = document.getElementById("DA");
    const Logout = document.getElementById("Logout");
    const ARW = document.getElementById("ARROW");
    if (AW) {
        Arrow.innerHTML = "Delete Account";
        ARW.innerHTML = "&#8659;";
        Arrow.style.display = "block";
        Logout.style.display = "none";
        AW = false;
    }
    else {
        ARW.innerHTML = "&#8657;";
        Arrow.style.display = "none";
        Logout.style.display = "block";
        AW = true;
    }
}

function DA() {
    localStorage.setItem('username', null);
    localStorage.setItem('password', null);
    localStorage.setItem('email', null);
}
function NDA() {
    const Notice = document.getElementById("ErrorMessage");
    const show = document.querySelector('.Alert');
    show.innerHTML = "&#9888;<br>THIS ACTION IS IRREVERSABLE <br> ARE YOU SURE YOU WANT TO CONTINUE?<br>&#9888;";
    Notice.style.display = "block";




}
function No() {

    document.getElementById("ErrorMessage").style.display = "none";


}

function searchBrand() {
    var keyword = document.getElementById("searchInput").value.toLowerCase();

    var Brands = {
        "bmw": "https://autozone-cargallery.github.io/BMW.html",
        "audi": "https://autozone-cargallery.github.io/Audi/Audi.html",
        "mercedes": "https://autozone-cargallery.github.io/Mercedes.html",
        "alfa romeo": "#",
        "ford": "#",
        "kia": "https://autozone-cargallery.github.io/Desoky/Kia.html",
        "nissan": "https://autozone-cargallery.github.io/Nissan%20cars%20shop/Nissan%20cars.html",
        "dodge": "https://autozone-cargallery.github.io/Dodge.html",
        "chevrolet": "https://autozone-cargallery.github.io/Cars/Chevy%20cars/Chevrolet.html",
        "lamborghini": "https://autozone-cargallery.github.io/Cars/Lamborgini%20Cars/Lamborghini.html",
        "toyota": "https://autozone-cargallery.github.io/Toyota/Touota.html",
        "volvo": "#",

    };

    // Check if the word exists in the mappings
    if (Brands.hasOwnProperty(keyword)) {
        window.location.href = Brands[keyword];
    } else {
        alert("Check spelling or else this brand doesn't exist on website....");
    }

}









//-------------------------------------------------------Mohamed hossam part start here-----------------------------------------------------------------------------------------//
let addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var carName = this.getAttribute("onclick");
        addToCart(carName);
    });
});

function addToCart(carName) {
    alert("You Bought " + carName);
}

document.addEventListener("DOMContentLoaded", function () {
    const imageSets = [
        ["Cars/BMW/3/1.png", "Cars/BMW/3/2.png", "Cars/BMW/3/3.png", "Cars/BMW/3/4.jpg"],
        ["Cars/BMW/5/1.jpg", "Cars/BMW/5/2.jpg", "Cars/BMW/5/3.jpg", "Cars/BMW/5/4.jpg", "Cars/BMW/5/5.jpg", "Cars/BMW/5/6.jpg", "Cars/BMW/5/7.jpg", "Cars/BMW/5/8.jpg"],
        ["Cars/BMW/7/1.jpg", "Cars/BMW/7/2.jpg", "Cars/BMW/7/3.jpg", "Cars/BMW/7/4.jpg", "Cars/BMW/7/5.jpg", "Cars/BMW/7/6.jpg", "Cars/BMW/7/7.jpg", "Cars/BMW/7/8.jpg", "Cars/BMW/7/9.jpg"],
        ["Cars/BMW/BMW M8 Gran Coupe/1.jpg", "Cars/BMW/BMW M8 Gran Coupe/2.jpg", "Cars/BMW/BMW M8 Gran Coupe/3.jpg", "Cars/BMW/BMW M8 Gran Coupe/4.jpg", "Cars/BMW/BMW M8 Gran Coupe/5.jpg", "Cars/BMW/BMW M8 Gran Coupe/6.jpg", "Cars/BMW/BMW M8 Gran Coupe/7.jpg", "Cars/BMW/BMW M8 Gran Coupe/8.jpg", "Cars/BMW/BMW M8 Gran Coupe/9.jpg", "Cars/BMW/BMW M8 Gran Coupe/10.jpg"],
        ["Cars/BMW/X6/2024-bmw-x6-102-1675791920.jpg", "Cars/BMW/X6/2024-bmw-x6-109-1675791922.jpg", "Cars/BMW/X6/2024-bmw-x6-110-1675791921.jpg", "Cars/BMW/X6/2024-bmw-x6-113-1675791922.jpg", "Cars/BMW/X6/2024-bmw-x6-120-1675791924.jpg"],
        ["Cars/BMW/X7/2023-bmw-x7-xdrive-40i144-641c5b4169eb2.jpg", "Cars/BMW/X7/2023-bmw-x7-xdrive-40i147-641c5b438a1cc.jpg", "Cars/BMW/X7/2023-bmw-x7-xdrive-40i128-641c5b39edaad.jpg", "Cars/BMW/X7/2023-bmw-x7-xdrive-40i132-641c5b3c33cbc.jpg", "Cars/BMW/X7/2023-bmw-x7-xdrive-40i101-641c5b2d70bc9.jpg", "Cars/BMW/X7/2023-bmw-x7-xdrive-40i115-641c5b31db5bb.jpg"],
        ["Cars/Mercedes/CLA/1.jpg", "Cars/Mercedes/CLA/2.webp", "Cars/Mercedes/CLA/3.jpg", "Cars/Mercedes/CLA/4.jpg"],
        ["Cars/Mercedes/A_Class/3.jpg", "Cars/Mercedes/A_Class/4.jpg", "Cars/Mercedes/A_Class/5.jpg", "Cars/Mercedes/A_Class/6.jpg", "Cars/Mercedes/A_Class/1.jpg", "Cars/Mercedes/A_Class/2.jpg", "Cars/Mercedes/A_Class/7.jpg", "/Cars/Mercedes/A_Class/8.jpg"],
        ["Cars/Mercedes/B_Class/1.jpg", "Cars/Mercedes/B_Class/2.jpg", "Cars/Mercedes/B_Class/3.jpg"],
        ["Cars/Mercedes/C_Class/1.jpg", "Cars/Mercedes/C_Class/2.jpg", "Cars/Mercedes/C_Class/3.jpg", "Cars/Mercedes/C_Class/4.jpg", "Cars/Mercedes/C_Class/5.jpg", "Cars/Mercedes/C_Class/6.jpg", "Cars/Mercedes/C_Class/7.jpg", "Cars/Mercedes/C_Class/8.jpg"],
        ["Cars/Mercedes/E_Class/4.jpg", "Cars/Mercedes/E_Class/5.jpg", "Cars/Mercedes/E_Class/6.jpg", "Cars/Mercedes/E_Class/7.jpg", "Cars/Mercedes/E_Class/1.jpg", "Cars/Mercedes/E_Class/2.jpg", "Cars/Mercedes/E_Class/3.jpg", "Cars/Mercedes/E_Class/8.jpg", "Cars/Mercedes/E_Class/9.jpg"],
        ["Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-101-1642184014.jpg", "Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-102-1642184016.jpg", "Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-103-1642184013.jpg", "Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-114-1642184019.jpg", "Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-124-1642184029.jpg"],
        // Add more sets of image URLs as needed
    ];
    if (document.getElementById("BMW")) {
        for (let i = 0; i < imageSets.length; i++) {
            const images = imageSets[i];
            const imageViewer = document.getElementById(`image-viewer-${i + 1}`);
            const backwardButton = imageViewer.querySelector(".backward-btn");
            const forwardButton = imageViewer.querySelector(".forward-btn");
            const imageElement = imageViewer.querySelector(".current-image");

            let currentIndex = 0;

            function showImage(i) {
                currentIndex = (i % images.length + images.length) % images.length;
                imageElement.src = images[currentIndex];
                imageElement.src = images[currentIndex];
            }

            backwardButton.addEventListener("click", function () {
                currentIndex--;
                showImage(currentIndex);
            });

            forwardButton.addEventListener("click", function () {
                currentIndex++;
                showImage(currentIndex);
            });

            // Show the initial image
            showImage(currentIndex);
        }
    } else {
        for (let i = 6; i < imageSets.length; i++) {
            const images = imageSets[i];
            const imageViewer = document.getElementById(`image-viewer-${i + 1}`);
            const backwardButton = imageViewer.querySelector(".backward-btn");
            const forwardButton = imageViewer.querySelector(".forward-btn");
            const imageElement = imageViewer.querySelector(".current-image");

            let currentIndex = 0;

            function showImage(i) {
                currentIndex = (i % images.length + images.length) % images.length;
                imageElement.src = images[currentIndex];
                imageElement.src = images[currentIndex];
            }

            backwardButton.addEventListener("click", function () {
                currentIndex--;
                showImage(currentIndex);
            });

            forwardButton.addEventListener("click", function () {
                currentIndex++;
                showImage(currentIndex);
            });

            // Show the initial image
            showImage(currentIndex);
        }


    }
});
//-------------------------------------------------------Mahmoud part start here-----------------------------------------------------------------------------------------//
function searchCars() {

    var input, filter, carSections, i, h2, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    var carSections = document.querySelectorAll(".individual-car");
    for (i = 0; i < carSections.length; i++) {
        h2 = carSections[i].querySelector("h2");
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            carSections[i].style.display = "";
        } else {
            carSections[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Bought Successfully!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const spans = document.querySelectorAll('td');

    spans.forEach(span => {
        span.addEventListener('mouseover', function () {
            this.style.color = '#007bff';
        });

        span.addEventListener('mouseout', function () {
            this.style.color = '';
        });
    });
});


function f() {
    console.log("Submit button clicked!");

    const Name = document.getElementById("name").value;
    const E_mail = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    localStorage.setItem("Name", Name);
    localStorage.setItem("E_mail", E_mail);
    localStorage.setItem("message", message);


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";


    alert("Submitted successfully!");
}

//-------------------------------------------------------Harby part start here-----------------------------------------------------------------------------------------//
function Buy_Alert() {
    var Buy_confirm;
    if (confirm("are you sure you want to buy this car ?")) {
        Buy_confirm = "You have bought this car !";
    }
    else {
        Buy_confirm = "Keep looking and you may find a car that suits you better"
    }
    document.getElementById("buy_confirm").innerHTML = Buy_confirm;
}

function Comment_alert() {
    alert("Thank you for your Comment, have a nice day!")
}





