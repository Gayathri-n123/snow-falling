const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var snow1,snow2,snow3,snow4,snow5;
var snow=[];
var bg;
var engine,world;
var count=100


function preload(){
  bg=loadImage("snow3.jpg")
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world
  if(frameCount%10===0){
    for(i=0;i<count;i++){

    snow.push(new Snow(random(10,790),random(0,400)))
    }
  }

}

function draw() {
  background(bg); 
  Engine.update(engine) 

 


for(i=0;i<count;i++){
  snow[i].display();
}
  drawSprites();
}