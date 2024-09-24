// Function to fetch a random sketch
function fetchRandomSketch() {
    fetch('/fetch-random-sketch')
        .then(response => response.json())
        .then(data => {
            console.log('Sketch updated successfully');
            // Reload the page to reinitialize the sketch
            window.location.reload();
        })
        .catch(error => {
            console.error('Error fetching sketch:', error);
        });
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const fetchSketchButton = document.getElementById('fetch-sketch');
    fetchSketchButton.addEventListener('click', fetchRandomSketch);
});