var jumpImg,runImg,landImg;
var jumpSound,landSound,deathSound;
var player
var platform
var gameState
function preload(){
    jumpImg = loadImage('jump.png');
    runImg = loadImage('Run.png');
    landImg = loadImage("Land.png");
    jumpSound = loadSound('Jump.mp3');
    landSound = loadSound('Land.mp3');
    deathSound = loadSound('Death.mp3');
}

function setup(){
    createCanvas(displayWidth - 120,displayHeight - 120);

    gameState = 1;
    
    player = createSprite(width/6,height*3/4 - 20);
    player.addImage(runImg);

}

function draw(){
    background('black')

    if (gameState === 1) {
        level2();
        drawSprites()
    }

    if (gameState === 2){
        background("green");
        level2();
        drawSprites()
    }
    
    ////drawSprites()
}

function level1(){
    
    var wall1 = createSprite(10,height/2,50,height);
    var wall2 = createSprite(width/6 + 30,(height*3/4) + 200,600,300);
    var wall3 = createSprite(width/2 + 50,height*3/4 + 50,200,450);
    var wall4 = createSprite(width*3/4,height*3/4 - 50,200,650);
    var wall5 = createSprite(width - 10,height/2 + 100,100,height - 200);
    var wall6 = createSprite(width - 25,10,75,25);

    wall1.shapeColor = 'brown';
    wall2.shapeColor = 'brown';
    wall3.shapeColor = 'brown';
    wall4.shapeColor = 'brown';
    wall5.shapeColor = 'brown';
    wall6.shapeColor = 'brown';
   
    
    if(player.isTouching(wall2)){
        platform = 2
    }
    if(player.isTouching(wall3)){
        platform = 3
    }
    if(player.isTouching(wall4)){
        platform = 4
    }

    //console.log(platform)

    if(keyDown(38) && player.y > displayHeight - 400 && player.x < 650 && platform === 2){
        player.velocityY = -17;
        jumpSound.play()
    }

    if(keyDown(38) && player.y > 450 && player.x < 1050 && platform === 3){
        player.velocityY = -17;
        jumpSound.play()
    }

    if(keyDown(38) && player.y > 290 && player.x < 1500 && platform === 4){
        player.velocityY = -17;
        jumpSound.play()
    }

    /*if(keyDown(38) && platform != 2){
        player.velocityY = -17
        console.log(player.y)
        console.log(player.x)
    }*/

    if(keyWentDown(37)){
        player.velocityX = -10; 
    }
    if(keyWentUp(37)){
        player.velocityX = 0;
    }
    if(keyWentDown(39)){
        player.velocityX = 10; 
    }
    if(keyWentUp(39)){
        player.velocityX = 0;
    }

    if(player.x > width - 120){
        
        wall1.remove()
        wall2.remove()
        wall3.remove()
        wall4.remove()
        wall5.remove()
        wall6.remove()
        console.log('level1 completed')
        gameState = 2
    }

    player.velocityY = player.velocityY + 0.6;

    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    
    
}

function level2() {
    player.x = width/10;
    player.y = height/4;

    var wall7 = createSprite(width/10,height*5/8 + 50,400,650)
   
    var wall8 = createSprite(width/4 + 80,height/2 - 100,300,50)
    var wall9 = createSprite(width/4 + 380,height/2 - 100,300,50)
    var wall10 = createSprite(width/4 + 680,height/2 - 100,300,50)
    var wall11 = createSprite(width/4 + 980,height/2 - 100,300,50)
   
    var wall12 = createSprite(width/4 + 80,height*3/4 - 100,300,50)
    var wall13 = createSprite(width/4 + 380,height*3/4 - 100 ,300,50)
    var wall14 = createSprite(width/4 + 680,height*3/4 - 100 ,300,50)
    var wall15 = createSprite(width/4 + 980,height*3/4 - 100 ,300,50)

    var wall16 = createSprite(width/4 + 80,height - 50,300,150)
    var wall17 = createSprite(width/4 + 380,height - 50 ,300,150)
    var wall18 = createSprite(width/4 + 680,height - 50 ,300,150)
    var wall19 = createSprite(width/4 + 980,height - 50 ,300,150)

    //wall8.shapeColor = 'red'
    //wall10.shapeColor = 'blue'

    if(keyDown(38)){
        player.velocityY = -17
        jumpSound.play()
    }
    
    player.velocityY = player.velocityY + 0.6;

    if(keyWentDown(37)){
        player.velocityX = -10; 
    }
    if(keyWentUp(37)){
        player.velocityX = 0;
    }
    if(keyWentDown(39)){
        player.velocityX = 10; 
    }
    if(keyWentUp(39)){
        player.velocityX = 0;
    }
   

    
    //drawSprites();
}