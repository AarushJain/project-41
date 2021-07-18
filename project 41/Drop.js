class Drop{
  constructor(x, y) {
  var options={
      isStatic:false,
      restitution:0.4
  }
  this.x=x;
  this.y=y;
  this.radius=10;
  this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
  World.add(world, this.body);
}

display(){
var particlePos=this.body.position;    
push();
translate(particlePos.x,particlePos.y);
fill("blue");
ellipseMode(CENTER);
ellipse(0,0,this.radius);
pop();
}
}