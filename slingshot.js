class Slingshot{
    constructor(bodyA, pointB){
        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10

        }
        this.chain = Condstraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);

    }
    display(){

        if(this.chain.bodyA){

            var pointA = this.body.bodyA.position;
            var pointB= pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        
        }
    }

    fly(){

        this.chain.bodyA = null

    }
}