const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball;


function setup() {
 var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200,390,200,20);
  World.add(world,ground);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}