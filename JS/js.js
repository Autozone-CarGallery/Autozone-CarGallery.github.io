    // Function to add car to cart
    function addToCart(carId) {
      let carName = `Car ${carId}`;
      let speed = parseFloat(document.getElementById(`car${carId}-speed`).textContent);
      alert(`${carName} added to cart with speed ${speed} mph.`);
  }