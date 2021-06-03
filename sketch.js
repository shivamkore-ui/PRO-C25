
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;
var d1, d2, d3;

function setup() {
	createCanvas(800, 700);
 
	engine = Engine.create();
	world = engine.world;

	paper = new Paper1(200,648,50,50)

	ground = new Ground(400,680,800,15)

	dustbin = new Dustbin(475,585,100, 100)
    
    d1 = new DustbinSupport(480,625,10,100)
	d2 = new DustbinSupport(570,625,10,100)
	d3 = new DustbinSupport(525,680,100,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  background(205); 
  
  ground.display();
  dustbin.display();
  paper.display();   


  Body.setDensity(dustbin, 0)

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:8, y:-8.5})
	}
}


