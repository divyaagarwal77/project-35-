var balloon ,backgroundImg;


function preload(){
    backgroundImg = loadImage("images/bg.png");
    hotairballoon = loadAnimation("images/Hot Air Ballon-02.png", "images/Hot Air Ballon-03.png", "images/Hot Air Ballon-04.png")

}

function setup() {
  database= firebase.database();
  createCanvas(1000,640);
  balloon = createSprite(500,300, 50, 50);
  balloon.addAnimation("hotairballoon", hotairballoon);   
  balloon.scale = 0.5;  
}

function draw() {
  background(backgroundImg); 
  strokeWeight(2);
  stroke("lightgreen");
  fill("blue");
  textSize(20);
  text("Use the arrow keys to move the Hot Air Balloon", 30, 30);

  if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
  }

  else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10;                                                              
  }

  else if(keyDown(UP_ARROW)){
   balloon.y =balloon.y -10
   balloon.scale = balloon.scale-0.01;
  } 

  else if(keyDown(DOWN_ARROW)){ writePosition(0, 10);
   balloon.y = balloon.y +10
   balloon.scale=balloon.scale+0.01;
  }

  drawSprites();
}

function readPosition(data){
position = data.val();
balloon.x = position.x;
balloon.y = position.y;
}

function writePosition(x, y){
database.ref('Balloon/Position').set({
  'x': balloon.x + x,
  'y': balloon.y + y,
})
}

function showError(){
  console.log("error");
}