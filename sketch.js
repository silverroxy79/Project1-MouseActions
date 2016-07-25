function preload(){
 fullcolor=loadImage("assets/fullcolor.jpg")
 vancolor=loadImage("assets/vancolor.jpg")
 vangreen=loadImage("assets/vangreen.jpg")
 vanprice=loadImage("assets/vanprice.png")
 vanverbage=loadImage("assets/vanverbage.png")
 servercolor=loadImage("assets/servercolor.jpg")
 servergreen=loadImage("assets/servergreen.jpg")
 serverprice=loadImage("assets/serverprice.png")
 serververbage=loadImage("assets/serververbage.png")
 foodcolor=loadImage("assets/foodcolor.jpg")
 foodgreen=loadImage("assets/foodgreen.jpg")
 foodprice=loadImage("assets/foodprice.png")
 foodverbage=loadImage("assets/foodverbage.png")
}

var w=720
var h=480

function setup() {
  createCanvas(windowWidth,windowHeight)
  fullcolor.resize(windowWidth*0.6,0)
  vancolor.resize(windowWidth*0.6,0)
  vangreen.resize(windowWidth*0.6,0)
  servercolor.resize(windowWidth*0.6,0)
  servergreen.resize(windowWidth*0.6,0)
  foodcolor.resize(windowWidth*0.6,0)
  foodgreen.resize(windowWidth*0.6,0)
}

function draw() {
  background(0)
  imageMode("center")
  image(fullcolor,windowWidth/2,windowHeight/2)
  
  if(mouseX > windowWidth*0.44 && mouseY > windowHeight*0.51 && mouseX < windowWidth*0.47 && mouseY < windowHeight*0.59){
    imageMode("center")
    image(foodcolor,windowWidth/2,windowHeight/2)
  }
  
  if(mouseX > windowWidth*0.44 && mouseY > windowHeight*0.51 && mouseX < windowWidth*0.47 && mouseY < windowHeight*0.59){
    imageMode("center")
    image(foodprice,mouseX,mouseY)
  }
  
  if(mouseX > windowWidth*0.44 && mouseY > windowHeight*0.51 && mouseX < windowWidth*0.47 && mouseY < windowHeight*0.59 && mouseIsPressed){
      image(foodgreen,windowWidth/2,windowHeight/2)
      imageMode("corner")
      image(foodverbage,windowWidth*0.20,windowHeight*0.08)
      }
  
  if(mouseX > windowWidth*0.49 && mouseY > windowHeight*0.28 && mouseX < windowWidth*0.55 && mouseY < windowHeight*0.56){
    imageMode("center")
    image(servercolor,windowWidth/2,windowHeight/2)
    
  }
  
  if(mouseX > windowWidth*0.49 && mouseY > windowHeight*0.28 && mouseX < windowWidth*0.55 && mouseY < windowHeight*0.56){
    imageMode("center")
    image(serverprice,mouseX,mouseY)
  }
  
  if(mouseX > windowWidth*0.49 && mouseY > windowHeight*0.28 && mouseX < windowWidth*0.55 && mouseY < windowHeight*0.56 && mouseIsPressed){
      imageMode("center")
      image(servergreen,windowWidth/2,windowHeight/2)
      imageMode("corner")
      image(serververbage,windowWidth*0.20,windowHeight*0.08)
      }
      
  if(mouseX > windowWidth*0.58 && mouseY > windowHeight*0.58 && mouseX < windowWidth*0.80 && mouseY < windowHeight*0.90){
    imageMode("center")
    image(vancolor,windowWidth/2,windowHeight/2)
  }
  
  if(mouseX > windowWidth*0.58 && mouseY > windowHeight*0.58 && mouseX < windowWidth*0.80 && mouseY < windowHeight*0.90){
    imageMode("center")
    image(vanprice,mouseX,mouseY)
  }
  
  if(mouseX > windowWidth*0.58 && mouseY > windowHeight*0.58 && mouseX < windowWidth*0.80 && mouseY < windowHeight*0.90 && mouseIsPressed){
      imageMode("center")
      image(vangreen,windowWidth/2,windowHeight/2)
      imageMode("corner")
      image(vanverbage,windowWidth*0.20,windowHeight*0.08)
      }
    }