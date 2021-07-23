var issimg
var spacebg
var spacecraft1img
var spacecraft2img
var spacecraft3img
var spacecraft4img
var hasDocked=false


function preload(){
  issimg=loadImage("iss.png")
  spacebg=loadImage("spacebg.jpg")
  spacecraft1img=loadImage("spacecraft1.png")
  spacecraft2img=loadImage("spacecraft2.png")
  spacecraft3img=loadImage("spacecraft3.png")
  spacecraft4img=loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(600,350);
 spacecraft  =  createSprite(285,240);
 spacecraft.addImage(spacecraft1img);
 spacecraft.scale=0.2; 

 iss  =  createSprite(330,130);
 iss.addImage(issimg);
 iss.scale=0.5; 
}

function draw() {
  background(spacebg);  
  spacecraft.addImage(spacecraft1img);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
    
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft4img);
      spacecraft.x = spacecraft .x-1;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft3img);
      spacecraft.x = spacecraft .x+1;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2img);
    }
 
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200 , 300);
  }
  
  drawSprites();
}
 
