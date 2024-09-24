// Function to fetch a random sketch
function fetchRandomSketch() {
    const randomSketchID = Math.floor(Math.random() * 1000) + 1; // Generate a random SKETCHID from 1 to 1000
    const url = `https://openprocessing.org/api/sketch/${randomSketchID}/code`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].code);

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