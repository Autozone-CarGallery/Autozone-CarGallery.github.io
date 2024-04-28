document.addEventListener('DOMContentLoaded', function() {
    var buyButtons = document.querySelectorAll('.add');
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Bought Successfully!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('td span');

    spans.forEach(span => {
        span.addEventListener('mouseover', function() {
            this.style.color = '#007bff';
        });

        span.addEventListener('mouseout', function() {
            this.style.color = ''; 
        });
    });
});
