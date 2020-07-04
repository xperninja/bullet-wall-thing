var car , wall,thickness;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
weight = random(30,52);
car = createSprite(50,200,70,10);
wall = createSprite(1500,200,thickness,height/2);
wall.shapeColor = "white";

}

function draw() {
  background(0,0,0);  
  
  car.velocityX = speed;
  if (isTouching(car,wall)){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/thickness^3;
    if (deformation<100)
    {
     car.shapeColor = "green"; 
    }
    if (deformation>100 && deformation<180)
    {
     car.shapeColor = "yellow"; 
    }
    if (deformation>180)
    {
     car.shapeColor = "red"; 
    }
  }
  drawSprites();
}

function isTouching (object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
     && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2){
return true ;
  }else {
 return false ;
  }
  }