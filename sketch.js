var ships
var sea

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,190,400,10);
  sea.addImage(seaImg);
  sea.scale = 0.5
 
  ships = createSprite(50,180,20,50);
  ships.addAnimation(shipImg1);
  ships.scale = 0.5
}

function draw() {
  background("blue")
  
  sea.velocityX = 5
  
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }
}