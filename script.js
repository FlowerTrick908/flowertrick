function animateImage() {
    const image = document.getElementById('botImage');
    image.style.transform = 'translateY(5px)'; // Move the image down
    setTimeout(() => {
        image.style.transform = 'translateY(0)'; // Reset the image position quickly
    }, 100); // Shortened the reset time to 100ms for faster response
}