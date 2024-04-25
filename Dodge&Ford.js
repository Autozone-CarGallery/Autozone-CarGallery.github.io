let addToCartButtons = document.querySelectorAll(".my-button"); 
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var carName = this.getAttribute("data-car-name");
        addToCart(carName);
    });
});

function addToCart(carName) {
    alert("Item '" + carName + "' added to cart!"); 
}
