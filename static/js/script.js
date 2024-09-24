// Function to fetch a random sketch
function fetchRandomSketch() {
    fetch('/fetch-random-sketch')
        .then(response => response.json())
        .then(data => {
            console.log('Sketch updated successfully');
            // Reload the sketch
            reloadSketch();
        })
        .catch(error => {
            console.error('Error fetching sketch:', error);
        });
}

// Function to reload the sketch
function reloadSketch() {
    // Remove the existing sketch
    remove();

    // Remove the old script tag
    const oldScript = document.querySelector('script[src*="sketch.js"]');
    if (oldScript) {
        oldScript.remove();
    }

    // Create a new script tag
    const newScript = document.createElement('script');
    newScript.src = `/static/js/sketch.js?v=${Date.now()}`; // Add a timestamp to bypass caching
    document.body.appendChild(newScript);

    // Wait for the script to load, then reinitialize the sketch
    newScript.onload = () => {
        new p5();
        reparentCanvas();
    };
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const fetchSketchButton = document.getElementById('fetch-sketch');
    fetchSketchButton.addEventListener('click', fetchRandomSketch);
});