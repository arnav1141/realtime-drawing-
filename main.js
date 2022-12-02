noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,600);
canvas=createCanvas(550,550);
canvas.position(800,130);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('PoseNet is initialized');
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("nose X="+noseX+"nose Y="+noseY);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("Left Wrist X="+leftWristX+"Right Wrist X="+rightWristX);
}
}
function draw(){
background('#BB8B14');
document.getElementById("square_side").innerHTML="The width and height of the square = "+difference+"px";
stroke('#FFFFE0');
fill('#FFA500');
square(noseX,noseY,difference);
}

