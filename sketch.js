
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup = new Group();
  obstacleGroup= new Group();
}



function setup() {
  createCanvas(500,300);
  
monkey = createSprite(50,250,20,20);
  monkey.scale = 0.118;
  monkey.addAnimation("run",monkey_running);
  
  ground=createSprite(250,290,500,10);
  
  score = 0;
}


function draw() {
background("lightBlue");
  
  textSize(25);
  text("SurvivalTime:   "+ score, 180,50);
   score = score + Math.round(getFrameRate()/61);
  
  if(keyDown("space")&& monkey.y >= 240){
    monkey.velocityY = -13;
  }
  
  monkey.velocityY= monkey.velocityY+0.8;
  monkey.collide(ground);
  
  drawSprites();
  
  spawnBananas();
  spawnObstacles();
}

function spawnBananas(){
  if (frameCount % 80 === 0) {
     banana = createSprite(500,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
   FoodGroup.add(banana);
    }
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,265,10,40);
   obstacle.velocityX = -(6 + score/100);
    obstacle.scale= 0.16
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }

}
