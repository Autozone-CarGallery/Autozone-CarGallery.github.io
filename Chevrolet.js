document.addEventListener('DOMContentLoaded', function() {
    var buyButtons = document.querySelectorAll('.add');
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Car added to cart successfully!');
        });
    });
});

