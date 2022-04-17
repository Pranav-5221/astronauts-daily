var bg,brush,bath,drink,eat,gym,move,sleep;
var astronaut




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload() {
  bg= loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  drink=loadAnimation("images/drink1.png,drink2.png");
  eat=loadAnimation("images/eat1.png,eat2.png");
  gym=loadAnimation("images/gym1.png,gym2.png,gym11.png,gym12.png");
  move=loadAnimation("images/move.png,move1.png");

}

function draw() {
  background(255,255,255);
  background.addImage("iss",bg)  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
 

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("m_key")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y=350;
    astronaut.velocityX = 3;
    astronaut.velocityY = 5;
  }
  drawSprites();
}