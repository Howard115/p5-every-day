// Wait for the p5.js sketch to create the canvas
function reparentCanvas() {
    const canvas = document.querySelector('canvas');
    if (canvas) {
        const container = document.getElementById('sketch-container');
        container.appendChild(canvas);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
    } else {
        requestAnimationFrame(reparentCanvas);
    }
}
reparentCanvas();