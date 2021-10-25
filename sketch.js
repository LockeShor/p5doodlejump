
var alien;
var img;
var dx = 200, dy = 0;
var grav = 4;
var spaceDown = false;
var barrier = 850;
function setup() {
  // put setup code here
  createCanvas(500,1000)

  img = loadImage('doodleman.png')

  // alien = createsprite(200,200)
  //alien.addImage(img)
}

function draw() {
  if(grav < 30){
    grav = grav * 1.1;
  }
  background("white")
  fill("black");

  if (dy > barrier) {
    dy -= 50;
    grav = 4;
  }
  if(dy < 900){
     dy = dy + grav;
  }
  else{
    dy = 900;
  }
  

  image(img, dx - 25,dy - 25, 100,100)
  //drawSprites();
  console.log("dy: " + dy)
}

function keyTyped() {
  if (key === 'a') {
    spaceDown = true;
  }
  // uncomment to prevent any default behavior
  return false;
}