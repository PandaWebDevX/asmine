function checkPassword() {
    const correctPassword = "love2025"; // Change this password
    const enteredPassword = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
    const content = document.getElementById("content");
    const passwordContainer = document.getElementById("password-container");

    if (enteredPassword === correctPassword) {
        passwordContainer.style.display = "none"; // Hide password input
        content.style.display = "block"; // Show content
        startSlideshow(); // Start slideshow
    } else {
        errorMessage.textContent = "Incorrect password. Try again!";
    }
}

// Slideshow Functionality
let images = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Add your images
let index = 0;

function startSlideshow() {
    setInterval(() => {
        index = (index + 1) % images.length;
        document.getElementById("slide").src = images[index];
    }, 3000);
}



