const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var building1, building2, building3, building4;
var house1, house2, house3, house4;

function preload(){
building1 = loadImage("building1.png");
building2 = loadImage("building2.png");
building3 = loadImage("building3.png");
building4 = loadImage("building4.png");

house1 = loadImage("house1.png");
house2 = loadImage("house2.png");
house3 = loadImage("house3.png");
house4 = loadImage("house4.png");
}


function setup(){
    createCanvas(10000 ,400);
    engine = Engine.create();
    world = engine.world;

 // wave1 box
 box1 = new Box(300, 200, 70, 50);
 box2 = new Box(370, 200, 70, 50);
 box3 = new Box(335, 150, 70, 50);
 box4 = new Box(1070, 200, 70, 50);
 box5 = new Box(1140, 200, 70, 50);
 box6 = new Box(1105, 150, 70, 50);
 box7 = new Box(2750, 200, 70, 50);
 box8 = new Box(3050, 200, 70, 50);
 box9 = new Box(3120, 200, 70, 50);
 box10 = new Box(3085, 150, 70, 50);
 box11 = new Box(3485, 200, 70, 50);
 box12 = new Box(3685, 200, 70, 50);
 box13 = new Box(3885, 200, 70, 50);

 // wave2 box
 box14 = new Box(4650, 200, 70, 50);
 box15 = new Box(4720, 200, 70, 50);
 box16 = new Box(4685, 150, 70, 50);
 box17 = new Box(5050, 200, 70, 50);
 box18 = new Box(7250, 200, 70, 50);
 box19 = new Box(7320, 200, 70, 50);
 box20 = new Box(7390, 200, 70, 50);
 box21 = new Box(7460, 200, 70, 50);
 box22 = new Box(7530, 200, 70, 50);
 box23 = new Box(7600, 200, 70, 50);
 box24 = new Box(7320, 150, 70, 50);
 box25 = new Box(7530, 150, 70, 50);
 box26 = new Box(8400, 200, 70, 50);
 box27 = new Box(8470, 200, 70, 50);

 // wave3 box
 box28 = new Box(9200, 200, 70, 50);
 box29 = new Box(9270, 200, 70, 50);
 box30 = new Box(9340, 200, 70, 50);
 box31 = new Box(9410, 200, 70, 50);
 box32 = new Box(9480, 200, 70, 50);
 box33 = new Box(9550, 200, 70, 50);
 box34 = new Box(9620, 200, 70, 50);


floor = Bodies.rectangle(300, 20, 50, 50);
floor=loadImage("floor.png");
World.add(world,floor);

}

function draw(){
    background("lightCyan");
    Engine.update(engine);

 

     // wave1 box
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

   // wave2 box
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();

   // wave3 box
   box28.display();
   box29.display();
   box30.display();
   box31.display();
   box32.display();
   box33.display();
   box34.display();
 

}
