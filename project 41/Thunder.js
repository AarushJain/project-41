class Thunder{
    constructor(x, y) {
    var options={
        isStatic:true,
    }
    this.x=x;
    this.y=y;
    this.radius=10;
    this.image=loadImage("sprites/1.png")
    this.body=Bodies.circle(this.x,this.y,this.radius/2, options);
    World.add(world,this.body);
  }
  
  display(){
  var thunderPos=this.body.position;    
  push();
  translate(thunderPos.x,thunderPos.y);
  imageMode(CENTER);
  image(this.image,0,0);
  pop();
  }
  }
  
  
  
  