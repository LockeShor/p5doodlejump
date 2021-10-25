
var alien


function setup() {
  // put setup code here
  createCanvas(500,1000)

  var img = loadImage('doodleman.png')

  alien = createsprite(200,200)
  alien.addImage(img)
}

function draw() {
  // put drawing code here
  fill("black");
  rect(200,200,50,50);
  drawSprites();
}