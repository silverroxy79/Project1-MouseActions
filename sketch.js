function preload(){
 fullcolor=loadImage("assets/fullcolor.jpg")
 vancolor=loadImage("assets/vancolor.jpg")
 vangreen=loadImage("assets/vangreen.jpg")
 servercolor=loadImage("assets/servercolor.jpg")
 severgreen=loadImage("assets/servergreen.jpg")
 foodcolor=loadImage("assets/foodcolor.jpg")
 foodgreen=loadImage("assets/foodgreen.jpg")
}

var w=720
var h=480

function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  background(0)
  imageMode("center")
  image(fullcolor,windowWidth/2,windowHeight/2,w,h)
  
  if(mouseX > 475 && mouseY > 375 && mouseX < 575 && mouseY < 475){
    image(foodcolor,windowWidth/2,windowHeight/2,w,h)
      mousePressed(){
      image(foodgreen,windowWidth/2,windowHeight/2,w,h)
    }
  }
  
  if(mouseX > 575 && mouseY > 175 && mouseY < 725 && mouseY < 475){
    image(servercolor,windowWidth/2,windowHeight/2,w,h)
      mousePressed(){
      image(servergreen,windowWidth/2,windowHeight/2,w,h)
    }
  }
  
  if(mouseX > 575 && mouseY > 175 && mouseX < 725 && mouseY < 475){
    image(servercolor,windowWidth/2,windowHeight/2,w,h)
      mousePressed(){
      image(servergreen,windowWidth/2,windowHeight/2,w,h)
    }
  }
}