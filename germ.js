class Germ{

    constructor(x, y, width, height){
    
        var box_options = {
            isStatic: true
        }
       this.body=Bodies.rectangle(x, y, width, height, box_options);
       this.width = width
       this.height = height
       this.image = loadImage("germs.png");
       World.add(world, this.body);
    }
    
    display(){
    
        var pos=this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
    
    }