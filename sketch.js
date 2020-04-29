const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var stick1,stick4 ,stick2,stick3,stick5,stick6 ;
var cement1,cement2,cement3,cement4,cement5,cement6,cement7;
var window1 ,window2 ,window3 ;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground (200,380,400,60);

    stick1 = new Box (55,300,50,100);
    stick2 = new Box (350,300,50,100);
    stick3= new Box (200,215,380,50);
    stick4 = new Box (60,140,100,100);
    stick5 = new Box (340,140,100,100);
    stick6 = new Box (200,295,80,110);

    cement1 = new Red (55,250,60,20);
    cement2 = new Red (350,250,60,20);
    cement3= new Red (200,70,380,50);
    cement4 = new Red (200,142,50,94);
    cement5 = new Red (170,300,10,10);
    cement6 = new Red (147,295,25,110);
    cement7 = new Red (250,295,25,110);

    window1 = new Blue (135,142,80,94);
    window2 = new Blue (260,142,80,94);
    window3 = new Blue (200,270,50,35);
    
}

function draw(){
    background("green");
   
    Engine.update(engine);
    ground.display();
    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();
    stick5.display();
    stick6.display();

    cement1.display();
    cement2.display();
    cement3.display();
    cement4.display();
    cement5.display();
    cement6.display();
    cement7.display();
    
    window1.display();
    window2.display();
    window3.display();

}