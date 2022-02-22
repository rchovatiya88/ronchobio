// variable to hold a reference to our A-Frame world
let world;

// light
let light2;
let light1;

// array to hold some particles
let particles = [];

function setup() {
  // no canvas needed
  noCanvas();

  // construct the A-Frame world
  // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
  world = new World("VRScene");

  // set the world background color
  world.setBackground(73, 182, 235);


  // add a GL Tranmission Format (GLTF) model
  // this was also pre-loaded in the 'index.html' file
  ship = new GLTF({
    asset: "ship",
    x: 0.1,
    y: 1,
    z: 1,
    scaleX: 0.3,
    scaleY: 0.3,
    scaleZ: 0.3,
    rotationX: 0,
    rotationY: 90
  });
  world.add(ship);

  // an ambient light - this light has no position and lights all entities equally
  light2 = new Light({
    color: "#BBB",
    type: "hemisphere",
    intensity: 3
  });
  world.add(light2);
  
  // an ambient light - this light has no position and lights all entities equally
  light1 = new Light({
    x: 2,
    y: 5,
    z: 0,
    color: "#BBB",
    type: "point",
    intensity: 3
  });
  world.add(light1);
  
  
  
  
}

function draw() {
  // always create a new particle
  var temp = new Particle(0, 0, -5);
  ship.spinY(-1);
  // add to array
  particles.push(temp);

  // draw all particles
  for (var i = 0; i < particles.length; i++) {
    var result = particles[i].move();
    if (result == "gone") {
      particles.splice(i, 1);
      i -= 1;
    }
  }
}

// class to describe a particle's behavior
class Particle {
  constructor() {
    // construct a new Box that lives at this position
    this.myBox = new Sphere({
      x: 0.1,
      y: 1.2,
      z: 1,
      red: random(255),
      green: random(255),
      blue: random(255),
      radius: 0.5
    });

    // add the box to the world
    world.add(this.myBox);

    // keep track of an offset in Perlin noise space
    this.xOffset = random(100);
    this.zOffset = random(200, 300);
  }

  // function to move our box
  move() {
    
    
  }
}
