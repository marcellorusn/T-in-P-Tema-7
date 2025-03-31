function setup() {
    createCanvas(800, 600);
    background(240);
    translate(400, 300);
  
    // Soare
    fill('yellow');
    stroke(0);
    circle(0, 0, 70);
  
    // Raze Soare cu triunghiuri
    fill('yellow');
    noStroke();
  
    triangle(-13, -50, 13, -50, 0, -75);
    triangle(-13, 50, 13, 50, 0, 75);
    triangle(-50, -13, -50, 13, -75, 0);
    triangle(50, -13, 50, 13, 75, 0);
    triangle(-35, -35, -50, -60, -20, -50);
    triangle(35, -35, 50, -60, 20, -50);
    triangle(-35, 35, -50, 60, -20, 50);
    triangle(35, 35, 50, 60, 20, 50);
  
    // Orbite și planete manual
    noFill();
    stroke(100);
  
    ellipse(0, 0, 250, 170); // Orbită 1
    fill('lightblue');
    noStroke();
    circle(-117, -30, 15); // Planetă 1
  
    noFill();
    stroke(100);
    ellipse(0, 0, 320, 180); // Orbită 2
    fill('salmon');
    noStroke();
    circle(-158, -10, 20); // Planetă 2
  
    noFill();
    stroke(100);
    ellipse(0, 0, 450, 200); // Orbită 3
    fill('#C9A9EC');
    noStroke();
    circle(-220, -15, 25); // Planetă 3
  
    noFill();
    stroke(100);
    ellipse(0, 0, 550, 220); // Orbită 4
    fill('lightblue');
    noStroke();
    circle(220, -15, 30); // Planetă 4
  
    noFill();
    stroke(100);
    ellipse(0, 0, 650, 240); // Orbită 5
    fill('lightgreen');
    noStroke();
    circle(250, 75, 40); // Planetă 5
  }
  