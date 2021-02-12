const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ball = new Ball(200,300,50,50);
  log1 = new Log(840,450,20,200,PI/2);
  log2 = new Log(1000,450,20,200,PI/2);
  log3 = new Log(920,250,170,20,PI/2)
  soldier1 = new Soldier(900,480,70,100);
  ground = new Ground(width/2,height-10,width,20);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ball.display();
  log1.display("red");
  log2.display("red");
  log3.display("red")
  soldier1.display();
  ground.display();
  //drawSprites();
}