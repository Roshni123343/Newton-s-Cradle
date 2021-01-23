
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2,bobObject3,bobObject4,bobObject5;
var Rope1,Rope2,Rope3,Rope4,Rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(415,200,230,30);

	bobObject1 = new Bob(310,450,25);
	bobObject2 = new Bob(360,450,25);
	bobObject3 = new Bob(410,450,25);
	bobObject4 = new Bob(460,450,25);
	bobObject5 = new Bob(510,450,25);

	Rope1 = new Rope(bobObject1.body,roof.body,-100,0);
	Rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	Rope3 = new Rope(bobObject3.body,roof.body,0,0);
	Rope4 = new Rope(bobObject4.body,roof.body,50,0);
	Rope5 = new Rope(bobObject5.body,roof.body,100,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  textSize(30);
  fill("cyan");
  text("To see the Cradle in action, press the left arrow key after",20,120);
  text(" a few seconds press the right arrow key!",20,150);

  keyPressed();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-5,y:-5});
	}
}




