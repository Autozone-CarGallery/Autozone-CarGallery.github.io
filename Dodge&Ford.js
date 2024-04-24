// JavaScript code to handle the "Add to Cart" button functionality
let addToCartButtons = document.querySelectorAll(".my-button"); // Get all elements with the class "my-button"

addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var carName = this.getAttribute("data-car-name"); // Get the value of the "data-car-name" attribute
        addToCart(carName); // Pass the car name to the addToCart function
    });
});

function addToCart(carName) {
    // This is where you can add the logic to add the item to the cart
    // For example, you can display a message, update a cart icon, or perform an AJAX request to add the item to a server-side cart
    alert("Item '" + carName + "' added to cart!"); // Example: Show an alert message with the car name
    // You can replace this alert with any desired functionality
}
