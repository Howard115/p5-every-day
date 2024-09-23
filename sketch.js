const TOTAL = 100;
const RATE = 0.6; // Control rate
let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL, 100);
    background(100);
    noStroke();

    for (var i = 0; i < TOTAL; i++) {
        points.push({
            pos: createVector(width / 2, height / 2),
            dir: random(TWO_PI),
            size: 0,
            color: {
                h: random(10, 13), //yellow
                s: random(60, 100),
                l: 50
            }
        });
    }
}

function draw() {
    var time = millis() / 1000;
    for (var i = 0; i < TOTAL; i++) {
        var point = points[i];

        point.dir += (noise(point.pos.x, point.pos.y, time) - 0.477) * RATE; // Controlled by RATE

        var mouseAngle = atan2(mouseY - point.pos.y, mouseX - point.pos.x);
        point.dir += (mouseAngle - point.dir) * 0.05 * RATE; // Controlled by RATE

        point.size *= 0.95;
        if (point.size < 2) {
            point.size = random(2, 5) * RATE; // Controlled by RATE
            let angle = random(TWO_PI);
            let distance = random(50, 100) * RATE; // Controlled by RATE
            point.pos.x = mouseX + cos(angle) * distance;
            point.pos.y = mouseY + sin(angle) * distance;
        }

        point.pos.x += cos(point.dir) / (point.size + 2.5) * 10 * RATE; // Controlled by RATE
        point.pos.y += sin(point.dir) / (point.size + 2.5) * 10 * RATE; // Controlled by RATE

        var bri = (noise(point.pos.x / 30, point.pos.y / 30, time * 2 + i * 0.005) - 0.3) * (140 - point.size * 20);
        fill(point.color.h, point.color.s, point.color.l + bri);
        circle(point.pos.x, point.pos.y, point.size);
    }
}