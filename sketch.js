
var alien;
var grav = 4;
var spaceDown = false;
var barrier = 850;
function setup() {
    // put setup code here
    createCanvas(500,1000)

    var img = loadImage('doodleman.png')
  
    alien = createSprite(200,200)
    alien.addImage(img)

    alien.limitSpeed(10)
}

function draw() {
  //background
  background("white");
  fill("black");
  strokeWeight(1);

  //bouncing
  if (alien.position.y > barrier){
    alien.velocity.y = -15;
    // alien.position.y = barrier
  }
  else {
    alien.velocity.y += 1.1;
  }
  
  //Movement
  if (keyDown("left") && alien.velocity.x > -10){
    alien.velocity.x -= 1;
    alien.mirrorX(1)
  }
  else if (keyDown("right") && alien.velocity.x < 10){
    alien.velocity.x += 1;
    alien.mirrorX(-1)
  }
  else {
      if(alien.velocity.x > 0) {
        alien.velocity.x -= 0.25;
      }
      if(alien.velocity.x < 0) {
        alien.velocity.x += 0.25;
      }
  }
  //infinite movement
  if(alien.position.x < 0){
    alien.position.x = 500;
  }
  if(alien.position.x > 500){
    alien.position.x = 0;
  }
  //drawing
console.log("alien vel x: " + alien.velocity.x)
  drawSprites();
  noFill();
  strokeWeight(10);
  rect(0,0,500,1000);
}

function keyPressed(){
  if (key === ' ') {
    spaceDown = true;
  }
}