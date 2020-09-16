class Box {

  constructor(x,y,width,height){

  this.height = height;
  this.width = width;
   this.bottombody = Bodies.rectangle(x,y,width,height,{isStatic:true});
   this.leftbody = Bodies.rectangle(x-40,y,height,width,{isStatic:true});
   this.rightbody = Bodies.rectangle(x+40,y,height,width,{isStatic:true});
   this.image = loadImage("dustbingreen.png");
  World.add(world,this.bottombody);
  World.add(world,this.leftbody)
  World.add(world,this.rightbody)
}
  display(){
  
  var pos = this.bottombody.position;
  rectMode(CENTER);
  imageMode(CENTER);
  image(this.image,pos.x,pos.y, this.width, this.width);
  
  }
};