var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(0); 
  car.velocityX=speed;
  if(hascollided(bullet,wall)){
		bullet.velocityX=0;
		var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
		if(damage>10){
			wall.shapeColor=(255,0,0);
		}
		if(damage<10){
			wall.shapeColor=(0,255.0);
		}
		
  }
  drawSprites();
}