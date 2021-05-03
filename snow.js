class Snow{

    constructor(x,y){

        var options={
            restitution:0.5,
            friction:1,
            
        }

     this.body=Bodies.circle(x,y,10,options);
     this.image=loadImage("snow4.webp");
     this.r=10;
     World.add(world,this.body)
    }

    display(){
      
      var angle=this.body.angle;
      var pos=this.body.position.x;
      push();
      //translate(pos.x,pos.y);
     // rotate(angle)
      ellipseMode(RADIUS)
      fill("white");
      ellipse(pos.x,pos.y,10,10)
      pop();
      


    }
}