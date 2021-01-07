class Paper{
         constructor(x,y,radius){
         var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,

         }

    this.crump = Bodies.circle(x,y,radius,options)
    this.radius = this.radius;
    this.x = x ;
    this.y = y ;
    World.add(world,this.crump) ;
      }
display(){
    var pos =this.crump.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill("yellow");
    ellipse(0, 0, this.radius);
    pop();
   }
}