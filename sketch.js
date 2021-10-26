
var alien;
var plat;
var grav = 4;
var spaceDown = false;
var barrier = 850;

var theme = "default";

function setup() {
    // put setup code here
    createCanvas(500,1000)

    var doodlemanImg = loadImage('/themes/'+theme+'/doodleman.png')
    var platformImg = loadImage('/themes/'+theme+'/platform.png')

    alien = createSprite(200,200)
    alien.addImage(doodlemanImg)


    plats = new Group();

    randomNum = parseInt(Math.floor(Math.random() * 400))
    plat = createSprite(randomNum + 50, 0)
    plat.addImage(platformImg)
    plats.add(plat)
}
var countdown = 50;
function draw() {
  countdown--
  if(countdown <= 0){
    var platformImg = loadImage('/themes/'+theme+'/platform.png')
    randomNum = parseInt(Math.floor(Math.random() * 400))
    newplat = createSprite(randomNum + 50, 0)
    newplat.addImage(platformImg)
    newplat.setCollider("rectangle", -10, 5, 20, 1)
    plats.add(newplat)

    countdown = 50
  }
  //background
  background("white");
  fill("black");
  strokeWeight(1);

  //bouncing

  if(alien.position.y > 1000){
    alien.velocity.y = 0;
    alien.position.y = 200;
    text("YOU LOST",50,50);
  }
  // else if (alien.position.y > barrier){
  //   alien.velocity.y = -15;
  // }
  else {
    alien.velocity.y += 1.1;
  }
  
  //Movement
  if (keyDown("left") && alien.velocity.x > -10){
    alien.velocity.x -= 3;
    alien.mirrorX(1)
  }
  else if (keyDown("right") && alien.velocity.x < 10){
    alien.velocity.x += 3;
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

  //platform down
  for (var i = 0;i < plats.size();i++){
    platinstance = plats.get(i);
    platinstance.velocity.y = 3;
      //platform collision
    alien.collide(platinstance, function(){
      alien.velocity.y = -20;
      if(platinstance.position.y <= alien.position.y){
        alien.position.y = platinstance.position.y + 5;
      }
    })

    console.log("platinstance")
  }



  //drawing
  console.log(plats.size())
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