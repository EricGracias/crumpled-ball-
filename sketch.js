
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperball,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	ground = createSprite(400,600,800,20);
	ground.shapeColor = "blue";

	papperball = createSprite(400,600,800,40);
	papperball.shapeColor = "blue";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



