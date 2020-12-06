
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var mango1, mango2, mango3, mango4, mango5, mango6;
var rock1;
var slingshot;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(650,300);
	mango2 = new Mango(700,250);
	mango3 = new Mango(670,200);
	mango4 = new Mango(700,200);
	mango5 = new Mango(670,220);
	mango6 = new Mango(650,230);

	rock1 = new Rock(100, 600, 25);

	slingshot = new Slingshot(rock1, 230);

	ground = new Ground(400, 690, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  rock1.display();

  slingshot.display();

  ground.display();


 
}



