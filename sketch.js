function preload(){
 fullcolor=loadImage("assets/fullcolor.jpg")
 vancolor=loadImage("assets/vancolor.jpg")
 vangreen=loadImage("assets/vangreen.jpg")
 servercolor=loadImage("assets/servercolor.jpg")
 severgreen=loadImage("assets/servergreen.jpg")
 foodcolor=loadImage("assets/foodcolor.jpg")
 foodgreen=loadImage("assets/foodgreen.jpg")
}

var w=windowWidth*0.8
var h=windowHeight*0.8

function setup() {
  createCanvas(windowWidth,windowHeight)
  imageMode(center)
}

function draw() {
  background(0)
  image(fullcolor,windowWidth/2,windowHeight/2,w,h)
}