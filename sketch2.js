const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,objectOption;
var ball,ball2,ball3,ground;
function setup(){
createCanvas(600,600);
engine=Engine.create();
world=engine.world;
// CREATING OBJECT OF CLASS
ball=new Bouncy(200,300,50,50);
ball2=new Bouncy(240,100,50,100);
ball3=new Bouncy(270,200,50,100);
ground=new Ground(300,500,600,20);
}


function draw(){
    background("yellow");
    Engine.update(engine);
   ball.display();
   ball2.display();
   ball3.display();
   ground.display();
   console.log(ball.body.angle);
}