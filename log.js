class Log{
    constructor(x,y,width,height,angle){
        var options = {
            restitution : 0.2,
            friction : 1,
            density : 0.5 
        }
        this.body = Bodies.rectangle(x,y,width,height,angle,options);
        this.width = width;
        this.height = height;
        Body.setAngle(this.body,angle);
        World.add(world,this.body);
        
    }
    display(color){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(color);
        rect(pos.x,pos.y,this.width,this.height);
    }
}