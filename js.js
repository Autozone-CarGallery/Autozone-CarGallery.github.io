function addToCart(carId) {
  let carName = `Car ${carId}`;
  let speed = parseFloat(document.getElementById(`car${carId}-speed`).textContent);
  alert(`${carName} added to cart with speed ${speed} mph.`);
}

document.addEventListener("DOMContentLoaded", function () {
  const imageSets = [
    ["Cars/BMW/3/1.png", "Cars/BMW/3/2.png", "Cars/BMW/3/3.png", "Cars/BMW/3/4.jpg"],
    ["Cars/BMW/5/1.jpg", "Cars/BMW/5/2.jpg", "Cars/BMW/5/3.jpg", "Cars/BMW/5/4.jpg", "Cars/BMW/5/5.jpg", "Cars/BMW/5/6.jpg", "Cars/BMW/5/7.jpg", "Cars/BMW/5/8.jpg"],
    ["Cars/BMW/7/1.jpg", "Cars/BMW/7/2.jpg", "Cars/BMW/7/3.jpg", "Cars/BMW/7/4.jpg", "Cars/BMW/7/5.jpg", "Cars/BMW/7/6.jpg", "Cars/BMW/7/7.jpg", "Cars/BMW/7/8.jpg", "Cars/BMW/7/9.jpg"],
    ["Cars/BMW/BMW M8 Gran Coupe/1.jpg", "Cars/BMW/BMW M8 Gran Coupe/2.jpg", "Cars/BMW/BMW M8 Gran Coupe/3.jpg", "Cars/BMW/BMW M8 Gran Coupe/4.jpg", "Cars/BMW/BMW M8 Gran Coupe/5.jpg", "Cars/BMW/BMW M8 Gran Coupe/6.jpg", "Cars/BMW/BMW M8 Gran Coupe/7.jpg", "Cars/BMW/BMW M8 Gran Coupe/8.jpg", "Cars/BMW/BMW M8 Gran Coupe/9.jpg", "Cars/BMW/BMW M8 Gran Coupe/10.jpg"],
    ["Cars/Mercedes/CLA/1.jpg", "Cars/Mercedes/CLA/2.webp", "Cars/Mercedes/CLA/3.jpg", "Cars/Mercedes/CLA/4.jpg"],
    ["Cars/Mercedes/A_Class/1.jpg", "Cars/Mercedes/A_Class/2.jpg", "Cars/Mercedes/A_Class/3.jpg", "Cars/Mercedes/A_Class/4.jpg", "Cars/Mercedes/A_Class/5.jpg", "Cars/Mercedes/A_Class/6.jpg", "Cars/Mercedes/A_Class/7.jpg", "/Cars/Mercedes/A_Class/8.jpg"],
    ["Cars/Mercedes/B_Class/1.jpg", "Cars/Mercedes/B_Class/2.jpg", "Cars/Mercedes/B_Class/3.jpg", "Cars/Mercedes/B_Class/4.jpg"],
    ["Cars/Mercedes/C_Class/1.jpg", "Cars/Mercedes/C_Class/2.jpg", "Cars/Mercedes/C_Class/3.jpg", "Cars/Mercedes/C_Class/4.jpg", "Cars/Mercedes/C_Class/5.jpg", "Cars/Mercedes/C_Class/6.jpg", "Cars/Mercedes/C_Class/7.jpg", "Cars/Mercedes/C_Class/8.jpg"],
    ["Cars/Mercedes/E_Class/1.jpg", "Cars/Mercedes/E_Class/2.jpg", "Cars/Mercedes/E_Class/3.jpg", "Cars/Mercedes/E_Class/4.jpg", "Cars/Mercedes/E_Class/5.jpg", "Cars/Mercedes/E_Class/6.jpg", "Cars/Mercedes/E_Class/7.jpg", "Cars/Mercedes/E_Class/8.jpg", "Cars/Mercedes/E_Class/9.jpg"],
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
    for (let i = 4; i < imageSets.length; i++) {
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