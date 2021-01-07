class BinBottom {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,140,20,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      strokeWeight(4);
      stroke("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };