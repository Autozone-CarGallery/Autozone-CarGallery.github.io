function addToCart(carId) {
  let carName = `Car ${carId}`;
  let speed = parseFloat(document.getElementById(`car${carId}-speed`).textContent);
  alert(`${carName} added to cart with speed ${speed} mph.`);
}

document.addEventListener("DOMContentLoaded", function () {
  const imageSets = [
    ["Cars/BMW/3/1.png", "Cars/BMW/3/2.png", "Cars/BMW/3/3.png", "Cars/BMW/3/4.jpg"],
    ["Cars/BMW/5/1.jpg", "Cars/BMW/5/2.jpg", "Cars/BMW/5/3.jpg", "Cars/BMW/5/4.jpg", "Cars/BMW/5/5.jpg", "Cars/BMW/5/6.jpg", "Cars/BMW/5/7.jpg", "Cars/BMW/5/8.jpg"],
    ["/Cars/BMW/7/p90486124-2023-bmw-760i-xdr-1667835081.jpg", "/Cars/BMW/7/p90486121-2023-bmw-760i-xdr-1667835075.jpg", "/Cars/BMW/7/p90486119-2023-bmw-760i-xdr-1667835074.jpg", "/Cars/BMW/7/p90486114-2023-bmw-760i-xdr-1667835057.jpg", "/Cars/BMW/7/p90486113-2023-bmw-760i-xdr-1667835067.jpg", "/Cars/BMW/7/p90486112-2023-bmw-760i-xdr-1667835067.jpg", "/Cars/BMW/7/p90486108-2023-bmw-760i-xdr-1667835058.jpg", "/Cars/BMW/7/p90486102-2023-bmw-760i-xdr-1667835057.jpg", "/Cars/BMW/7/p90486093-2023-bmw-760i-xdr-1667835058.jpg"],
    ["/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-101-1570570427.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-102-1570570424.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-103-1570570423.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-105-1570570424.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-106-1570570424.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-115-1570570428.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-117-1570570428.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-128-1570570432.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-130-1570570433.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2020-bmw-m8-gran-coupe-competition-134-1570570435.jpg"],
    ["Cars/Mercedes/CLA/0a519e2eec5f44d89bafb14e1daebc96.jpg", "Cars/Mercedes/CLA/2024_Mercedes_Benz_CLA_250_Rose-Gold_Black_010.webp", "Cars/Mercedes/CLA/5e2e56203c7144fea22cc7ce5bc838df.jpg", "Cars/Mercedes/CLA/da7a2e2d11ad4c67a7cda407f134f699.jpg"],
    ["Cars/Mercedes/A_Class/373692526a61404e8e6df8a8aa21edff.jpg", "/Cars/Mercedes/A_Class/4e5eba640b2644ab853a38317da281fa.jpg", "/Cars/Mercedes/A_Class/801c79c49b5046f3805f8b7e5cba85da.jpg", "/Cars/Mercedes/A_Class/83958660309e48749513b339a12468e9.jpg", "/Cars/Mercedes/A_Class/88218fe9612140189625d33514261fe4.jpg", "/Cars/Mercedes/A_Class/8c9b204b7094413c9febbcd936d7102b.jpg", "/Cars/Mercedes/A_Class/bcf2546bf7e94c5587b731be1b460b3c.jpg", "/Cars/Mercedes/A_Class/f5d2c7d73fd0497dabefecefaf559a3c.jpg"],
    ["Cars/Mercedes/B_Class/043b9daba97042e2b8ddf32073d50953.jpg", "/Cars/Mercedes/B_Class/87-mercedes-b-class-dash.jpg", "/Cars/Mercedes/B_Class/b43037cf53da44b8b232ac042e942785.jpg", "/Cars/Mercedes/B_Class/da6a549b761d4f459b3656c718a55349.jpg"],
    ["Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-101-1655383529.jpg", "/Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-111-1655383530.jpg", "/Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-113-1655383531.jpg", "/Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-115-1655383534.jpg", "/Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-125-1655383536.jpg", "/Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-126-1655383537.jpg", "/Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-130-1655383538.jpg", "/Cars/Mercedes/C_Class/2022-mercedes-benz-c300-4matic-sedan-133-1655383540.jpg"],
    ["Cars/Mercedes/E_Class/073b9e50ab0746969589686db3f278a2.jpg", "/Cars/Mercedes/E_Class/2125b94e951c4a5db804e1357e10b65f.jpg", "/Cars/Mercedes/E_Class/3e71d62339424cc4bd44c1d2ffe2e569.jpg", "/Cars/Mercedes/E_Class/4ddbd7b19f9547d6995eee7d8a43eee9.jpg", "/Cars/Mercedes/E_Class/9e7667ff47394d6fb3a132dddaded218.jpg", "/Cars/Mercedes/E_Class/c7cd2a13330b45349869e0f2e56ab649.jpg", "/Cars/Mercedes/E_Class/e8fedef592054bae89956d99aaf2a700.jpg", "/Cars/Mercedes/E_Class/e978e19f9a204c48a0d63f2b0cd474d0.jpg", "/Cars/Mercedes/E_Class/f7efc50ef77540eb9cccfc26e44cc4cf.jpg"],
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
  });
});