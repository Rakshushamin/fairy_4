const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var fairy,fairy_img;
var starngt,starngt_img;
var star,star_img;

function preload()
{
   //preload the images here
   fairy_img=loadAnimation("fairy1.png","fairy2.png");
   starngt_img=loadImage("starnight.png");
   star_img=loadImage("star.png");
}

function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;

  fairy(CENTER);
  fairy=createSprite("150,150,10,10");
  fairy.addAnimation("Fairy",fairy_img);
  fairy.scale=0.2;

  starngt=createSprite("300,300,10,10");
  starngt.addImage("Star",starngt_img);
  starngt.scale=1;

  var star_option1=
    {
        isStatic:false
    }
    var star_option2=
    {
    
      isStatic:true
    }

  star=Bodies.rectangle("500,500,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.5;
  World.add(world,star);

  star=Bodies.rectangle("250,250,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.5;
  World.add(world,star);

  star=Bodies.rectangle("450,450,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.37;
  World.add(world,star);

  star=Bodies.rectangle("300,300,10,10,star_option1,star_option2");
  star.addImage("Star",star_img);
  star.scale=0.2;
  World.add(world,star);
}


function draw() {
  background("black");
  Engine.update(engine);
  if(keyDown("right"))
    {
      fairy.x=fairy.x+3;
    }
  if(keyDown("left"))
    {
      fairy.x=fairy.x-3;
    }
  if(keyDown("space"))
  {
    rect(star.position.x,star.position.y,400,50,star_option1);
  }
  if(star.isTouching("fairy"))
  {
    rect(star.position.x,star.position.y,400,50,star_option2);
  }
  drawSprites();
}
