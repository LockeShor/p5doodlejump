
var alien;
var plat;
var platop = false;

var jumpfactor = 22;

var theme = "default";

function setup() {
    // put setup code here
    createCanvas(500,1000)

    var doodlemanImg = loadImage('/themes/'+theme+'/doodleman.png')
    var platformImg = loadImage('/themes/'+theme+'/platform.png')

    alien = createSprite(200,200)
    alien.addImage(doodlemanImg)

    plats = new Group();

    randomNum = parseInt(Math.floor(Math.random() * 500))
    plat = createSprite(randomNum, 0)
    plat.addImage(platformImg)
    plats.add(plat)
}
var countdown = 50;
function draw() {
  countdown--
  if(countdown <= 0){
    var platformImg = loadImage(`themes/${theme}/platform.png`)
    randomNum = parseInt(Math.floor(Math.random() * 500))
    newplat = createSprite(randomNum, 0)
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
  else if (alien.velocity.y < 50) {
    alien.velocity.y += 1.1;
  }
  else{
    alien.velocity.y = 49;
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

      if(alien.position.x > platinstance.position.x-40 
        && alien.position.x < platinstance.position.x+40
        && alien.position.y > platinstance.position.y-50 
        && alien.position.y < platinstance.position.y  ){
          alien.velocity.y = -jumpfactor;
      }


  }


  //drawing
  console.log(alien.velocity.y)
  drawSprites();
  noFill();
  strokeWeight(10);
  rect(0,0,500,1000);
}