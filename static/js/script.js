// Function to fetch a random sketch
function fetchRandomSketch() {
    fetch('/fetch-random-sketch')
        .then(response => response.json())
        .then(code => {
            console.log(code);
            // Here you can add logic to update the sketch with the new code
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