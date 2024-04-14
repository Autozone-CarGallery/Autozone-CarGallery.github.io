    function addToCart(carId) {
      let carName = `Car ${carId}`;
      let speed = parseFloat(document.getElementById(`car${carId}-speed`).textContent);
      alert(`${carName} added to cart with speed ${speed} mph.`);
  }

  document.addEventListener("DOMContentLoaded", function() {
    const imageSets = [
      ["/Cars/BMW/3/download.png", "/Cars/BMW/3/download (2).png", "/Cars/BMW/3/download (1).png", "/Cars/BMW/3/cq5dam.resized.img.1680.large.time1687423776513.jpg"],
      ["/Cars/BMW/5/2024-bmw-530i-xdrive-123-65808a4e31e3a.jpg", "/Cars/BMW/5/2024-bmw-530i-xdrive-118-65808a4c3d44a.jpg", "/Cars/BMW/5/2024-bmw-530i-xdrive-116-6580912c795a3.jpg", "/Cars/BMW/5/2024-bmw-530i-xdrive-108-65808a48e348e.jpg", "/Cars/BMW/5/2024-bmw-530i-xdrive-107-65808a48d5052.jpg" ,"/Cars/BMW/5/2024-bmw-530i-xdrive-106-65808a47dae3e.jpg", "/Cars/BMW/5/2024-bmw-530i-xdrive-102-65808a46b7d5b.jpg", "/Cars/BMW/5/2024-bmw-530i-xdrive-101-65808a46cad5c.jpg"],
      // Add more sets of image URLs as needed
    ];
  
    imageSets.forEach((images, index) => {
      const imageViewer = document.getElementById(`image-viewer-${index + 1}`);
      const backwardButton = imageViewer.querySelector(".backward-btn");
      const forwardButton = imageViewer.querySelector(".forward-btn");
      const imageElement = imageViewer.querySelector(".current-image");
  
      let currentIndex = 0;
  
      function showImage(index) {
        if (index < 0) {
          currentIndex = images.length - 1;
        } else if (index >= images.length) {
          currentIndex = 0;
        }
  
        imageElement.src = images[currentIndex];
      }
  
      backwardButton.addEventListener("click", function() {
        currentIndex--;
        showImage(currentIndex);
      });
  
      forwardButton.addEventListener("click", function() {
        currentIndex++;
        showImage(currentIndex);
      });
  
      // Show the initial image
      showImage(currentIndex);
    });
  });