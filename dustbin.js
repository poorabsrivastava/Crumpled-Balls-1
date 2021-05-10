class Dustbin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 213;
        this.wallThickness = 20;
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, { 
            isStatic: true
        })
        this.leftWallBody = Bodies.rectangle(this.x - this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {
            isStatic: true
        })
        this.rightWallBody = Bodies.rectangle(this.x + this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {
            isStatic: true
        })
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);
    }
    display(){
        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftWallBody.position;
        var rightPos = this.rightWallBody.position;
        push();
        translate(leftPos.x, leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(rightPos.x, rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle * (-1));
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(bottomPos.x, bottomPos.y + 10);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        rect(0, 0, this.dustbinWidth, this.wallThickness);
        pop();
    }
}