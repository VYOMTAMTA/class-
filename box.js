class Box{

constructor(x, y, width, height){

    var box_options = {
        isStatic: true
    }
   this.body=Bodies.rectangle(x, y, width, height, box_options);
   this.trajectory=[];
   this.width = width;
   this.height = height;
   this.image = loadImage("box.jpg");
   World.add(world, this.body);
}

display(){

    //var pos=this.body.position
    var position = [this.body.position.x, this.body.position.y]; 
    this.trajectory.push(position); 
    for(var i=0; i<this.trajectory.length; i = i + 20){
        // var box = trajectory[i]; 
         image(this.image, this.trajectory[i][0], this.trajectory[i][1]);
    }
   // imageMode(CENTER);
    //image(this.image, pos.x, pos.y, this.width, this.height);
}

}
