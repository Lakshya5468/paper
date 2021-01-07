class Paper{
    constructor(x,y,r){
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x, y, r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var paperPos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(paperPos.x,paperPos.y);
        rotate(angle);
        imageMode(CENTER);
        this.image.scale=0.5;
        image(this.image,0,0,this.body.r);
        pop();
    }
};