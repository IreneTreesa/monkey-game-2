  var monkey, animal;
  var banana,bananaImage, obstacle, obstacleImage;
  var FoodGroup, obstacleGroup;
  var score;

function preload(){
  
  animal =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  
  ground= createSprite(200,390,800,10);
  ground.velocityX= -4;
  
  monkey= createSprite(100,200,30,40);
  monkey.addAnimation("moving",animal);
  monkey.scale=0.1;
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
  
  

  
}


function draw() {
background("skyblue");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
  
  spawnObstacles();
  spawnFruits();
  drawSprites();
  
}

function spawnObstacles(){
    
  if (frameCount%300===0){
    obstacle= createSprite(400,380,10,40);
    obstacle.velocityX= -4;
    obstacle.lifetime= 90;
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.1;
    obstacleGroup.add(obstacle);
    }
}

function spawnFruits(){
  
  if (frameCount%80===0){
    banana= createSprite(400,165,10,40);
    banana.scale=0.1;
    banana.velocityX= -4;
    banana.y= Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.lifetime= 90;
    bananaGroup.add(banana);
  }
}






