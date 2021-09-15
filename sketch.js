const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var tower;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(1200,600);

  angle = -PI/4
  cannon = new Cannon(180,110,100,50,angle)

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 310);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
    tower.display();
    cannon.display();
 
}

