
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundSprite = new Ground(width/2, 680, width,10);

	bin = new Box(630,630,100,20);
	
  
	paper1 = new paper(100,600,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  paper1.display();
  bin.display();
 
 
 

  groundSprite.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 

	Matter.Body.applyForce(paper1.body, paper1.body.position,{x:45,y:-45}); 
	
	}
}
