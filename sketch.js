
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var groundObject;
var dustbinObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     paperObject = new Paper(200, 450, 70);
	 groundObject = new Ground(width/2, 690, width, 20);
	 dustbinObject = new Dustbin(1200, 650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  groundObject.display();
  dustbinObject.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode = UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {
			x: 130,
			y: -145
		})
	}
}