// Add click sound effect to navigation buttons
const navLinks = document.querySelectorAll('.nav a'); // Select all navigation links with the class `.nav a`
const navClickSound = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Create a new audio object with the specified sound file

navLinks.forEach(link => { // Loop through each navigation link
    link.addEventListener('click', function() { // Add a click event listener to each link
        navClickSound.play().catch(error => { // Play the sound and handle any errors if playback is blocked
            console.error('Audio playback was blocked:', error); // Log an error message if audio playback fails
        });
    });
});

document.addEventListener("DOMContentLoaded", function () { // Wait until the DOM content is fully loaded before executing the code
    const video = document.querySelector("video1"); // Select the video element with the tag name `video1`
    video.volume = 1.0; // Set the video volume to maximum (value range is from 0 to 1)
});
