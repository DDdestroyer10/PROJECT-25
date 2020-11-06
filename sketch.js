const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3;
var gr;
var pa,paImage;
var dust,dustImage;


function preload()
{
  dustImage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);

  dust = createSprite(650,600,100,50) 
  dust.addImage(dustImage)
  dust.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	b1 = new dustbin(650,670,170,20)
	b2 = new dustbin(575,600,20,150)
	b3 = new dustbin(725,600,20,150)
	gr = new ground(400,690,800,20)
  pa = new paper(200,680,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

  b1.display();
  b2.display();
  b3.display();
  gr.display();
  pa.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(pa.body,pa.body.position,{x:80,y:-80});

  }
}