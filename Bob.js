class Bob {  
    constructor(x, y, radius){
        var options = {
            'restitution':1,
            'friction':0.3,
            'density':0.8
            }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("Pink");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}
