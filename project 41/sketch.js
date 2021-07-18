const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

var drop=[];

var lightning;

function preload()
{
	
}

function setup() {
	createCanvas(500, 1000);
	engine = Engine.create();
  world = engine.world;

    boy=new Umbrella(250,625)
    
    lightning= new Thunder(250,50)

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");


 


  for(var j=0;j<drop.length;j++){
		drop[j].display();
	}

  if(frameCount%100===0){
  lightning.display();
  }
    if(frameCount%1===0)
	{
    drop.push(new Drop(random(0,400), random(0,400)));
	}
  
  boy.display();

  drawSprites();
 
}
