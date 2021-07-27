



function preload(){

  Runner_run=loadAnimation("Runner-1.png", "Runner-2.png")
  TrackImage=loadImage("path.png")
  //pre-load images
}

function setup(){
  createCanvas(400,400)
  path=createSprite(200,200);
  path.addImage(TrackImage);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(120,300,5,5);
  runner.addAnimation("runner",Runner_run );
  runner.scale=0.06;

  invisibleBoundaries1  = createSprite(10,400,10,400);
  
  invisibleBoundaries = createSprite(390,400,10,400);

  //create sprites here
}

function draw() {
  background(0);

  runner.x = World.mouseX;

  if(path.y > 400){
    path.y = height/2;
  }

  runner.collide(invisibleBoundaries1);
runner.collide(invisibleBoundaries);

  drawSprites()
}
