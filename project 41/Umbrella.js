class Umbrella{
    constructor(x, y,radius) {
    var options={
        isStatic:true,
    }
    this.x=x;
    this.y=y;
    this.radius=10;
    this.image=loadImage("sprites/Walking frame/walking_1.png")
    this.body=Bodies.circle(this.x,this.y,this.radius/2, options);
    World.add(world,this.body);
  }
  
  display(){
  var umbPos=this.body.position;    
  push();
  translate(umbPos.x,umbPos.y);
  scale(0.5,0.5)
  imageMode(CENTER);
  image(this.image,0,0);
  pop();
  }
  }
  
  
  
  