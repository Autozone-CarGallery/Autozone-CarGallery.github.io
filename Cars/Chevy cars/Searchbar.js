function searchCars() {
    var input, filter, carGrid, cars, car, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    carGrid = document.querySelector(".car-grid");
    cars = carGrid.querySelectorAll(".car");

    for (i = 0; i < cars.length; i++) {
        car = cars[i];
        txtValue = car.querySelector("h3").textContent || car.querySelector("h3").innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            car.style.display = "";
        } else {
            car.style.display = "none";
        }
    }
}
