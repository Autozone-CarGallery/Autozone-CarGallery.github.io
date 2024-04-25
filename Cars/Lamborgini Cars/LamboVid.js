function f() {
    console.log("Submit button clicked!");

    const carName = document.getElementById("car-name").value;
    const carModel = document.getElementById("car-model").value;
    const comments = document.getElementById("comments").value;


    localStorage.setItem("carName", carName);
    localStorage.setItem("carModel", carModel);
    localStorage.setItem("comments", comments);


    document.getElementById("car-name").value = "";
    document.getElementById("car-model").value = "";
    document.getElementById("comments").value = "";


    alert("Submitted successfully!");
}
