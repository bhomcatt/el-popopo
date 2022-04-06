img = "";
var status = "";

function preload(){
img = loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos"
}

function draw(){
image(img, 0, 0, 640, 420);
fill(255, 0, 0);
text("perro",45 ,75);
noFill();
stroke(255, 0, 0);
rect(30, 60, 450, 350);
rect(300, 90, 270,320 );
text("gato", 320, 120);
}

function modelLoaded(){
    console.log("model loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(results,error){
if(error){
    console.error(error);
}else{
    console.log(results);
}
}