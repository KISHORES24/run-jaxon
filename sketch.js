var runner,pathImg,runner_Running;
var lt,edges,rt;

function preload(){
  //pre-load images
  runner_Running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup() {
  createCanvas(400,400);

  //create sprites here
  lt = createSprite(20,200,20,600);
  lt.visible = false;

  edges = createEdgeSprites();

  rt = createSprite(380,200,20,600);
  rt.visible = false;

  //create a path sprite
  path = createSprite(200,200);
  path.addImage(pathImg);

  runner = createSprite(200,330,10,10);

  runner.addAnimation("running", runner_Running);
  runner.scale = 0.1;


}

function draw() {
  background(0);

  runner.x = mouseX;

  runner.collide(lt);
  runner.collide(edges);
  runner.collide(rt);

  if (runner.x < 20) {
    runner.x = 100;
  }

  path.velocityY = 4;

  if (path.y > 400) {
    path.y = height / 2;
  }

  console.log(path.y);

  drawSprites();

}
