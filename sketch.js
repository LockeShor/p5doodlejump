

function setup() {
  // put setup code here
  createCanvas(500,1000)
  var alien = createSprite(200,200)
  alien.setImage("./doodleman.png")
}

function preload(){
  loadAnimation(alien)
}

function draw() {
  // put drawing code here
  fill("black")
  rect(200,200,50,50)
  drawSprites()
}