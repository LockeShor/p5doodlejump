
var alien;
var plat;
var platop = false;

var gravity = 0.5;
var jumpfactor = 15;

var theme = "default";


function setup() {
    // put setup code here
    createCanvas(500,1000);

    var doodlemanImgRaw = loadImage('https://raw.githubusercontent.com/Redpug111/p5doodlejump/main/themes/'+theme+'/doodleman.png')
    var platformImgRaw = loadImage('https://raw.githubusercontent.com/Redpug111/p5doodlejump/main/themes/'+theme+'/platform.png')

    var doodlemanImg = doodlemanImgRaw;
    var platformImg = platformImgRaw;

    alien = createSprite(200,200);
    alien.addImage(doodlemanImg);

    plats = new Group();

    randomNum = parseInt(Math.floor(Math.random() * 500));
    plat = createSprite(randomNum, 0);
    plat.addImage(platformImg);
    plats.add(plat);
}
var countdown = 50;
function draw() {
  countdown--
  if(countdown <= 0){
    var platformImgRaw = loadImage('https://raw.githubusercontent.com/Redpug111/p5doodlejump/main/themes/'+theme+'/platform.png');
    var platformImg = platformImgRaw;
    randomNum = parseInt(Math.floor(Math.random() * 500))
    newplat = createSprite(randomNum, 0)
    newplat.addImage(platformImg)
    plats.add(newplat)

    countdown = Math.floor(Math.random()*20) + 40
  }
  //background
  background("white");
  fill("black");
  strokeWeight(1);

  //bouncing

  if(alien.position.y > 1000){
    alien.velocity.y = 0;
    alien.position.y = 200;
  }
  else if (alien.velocity.y < 50) {
    alien.velocity.y += gravity;
  }
  else{
    alien.velocity.y = 49;
  }
  
  //Movement
  var moveStrength = 2;
  if (keyDown("left") && alien.velocity.x > -10){
    alien.velocity.x -= moveStrength;
    alien.mirrorX(1)
  }
  else if (keyDown("right") && alien.velocity.x < 10){
    alien.velocity.x += moveStrength;
    alien.mirrorX(-1)
  }
  else {
      if(alien.velocity.x > 0) {
        alien.velocity.x -= 0.35;
      }
      else if(alien.velocity.x < 0) {
        alien.velocity.x += 0.35;
      }
      else {
        alien.velocity.x = 0;
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

      // if(alien.position.x > platinstance.position.x-40 
      //   && alien.position.x < platinstance.position.x+40
      //   && alien.position.y > platinstance.position.y-50 
      //   && alien.position.y < platinstance.position.y  
      //   && alien.velocity.y > 0){
      //     alien.velocity.y = -jumpfactor;
      // }

      alien.overlap(platinstance, function(){
        if(alien.velocity.y > 0){
            alien.velocity.y = -jumpfactor;
            var doodlemanJumpImgRaw = loadImage('https://raw.githubusercontent.com/Redpug111/p5doodlejump/main/themes/'+theme+'/doodlemanjump.png');
            var doodlemanJumpImg = doodlemanJumpImgRaw;
            alien.addImage(doodlemanJumpImg);
            alien.scale = 2;
            setTimeout(function(){
              var doodlemanImgRaw = loadImage('https://raw.githubusercontent.com/Redpug111/p5doodlejump/main/themes/'+theme+'/doodleman.png')
              alien.addImage(doodlemanImgRaw);
            },500)
          alien.scale = 1;
        }
      })


  }
  //collision
  

  //drawing
  drawSprites();
  noFill();
  strokeWeight(10);
  rect(0,0,500,1000);
}