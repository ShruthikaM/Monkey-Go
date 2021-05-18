
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var survivalTime;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  createCanvas(600,500)
 monkey=createSprite(100,400,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  
  ground=createSprite(100,440,600,10);
  ground.velocityX=3;

  bananaGroup=new Group();
  obstacleGroup=new Group();
  

survivalTime=0;
  score=0;
}


function draw() {
  
  background(225);
  
text("survivalTime: "+ survivalTime, 250,100);
 survivalTime=Math.ceil(frameCount/frameRate());
  

  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -15;
  
    }
  monkey.velocityY=monkey.velocityY+0.5;
  
  if(ground.x > 300){
      ground.x = 300
    }
  
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
    score=score+1;
  }
  bananas();
  spawnObstacles();
 drawSprites(); 
}

function spawnObstacles(){
  if(frameCount%200===0){
   obstacle=createSprite(500,420);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-7;
    obstacle.lifetime=200;
     obstacleGroup.add(obstacle);
  }
}

function bananas(){
  if(frameCount%180===0){
    banana=createSprite(400,Math.round(random(200,280)));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
}


