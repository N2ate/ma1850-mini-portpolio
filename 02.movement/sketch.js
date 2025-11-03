let i = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(220)

    // Eyes
fill(255, 0, 0);
circle(50, 50, 50);
circle(200, 50, 50);
// Mouth
fill(0, 255, 0, 255)
ellipse(150, 150, i, 20);

rect(30, i, 55, 40);

// Increment
i = i+1;

}



