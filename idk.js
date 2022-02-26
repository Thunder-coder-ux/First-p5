function preLoad(){

}

function setup(){
    canvas = createCanvas(800, 600);
    canvas.position(372, 285);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
image(video, 190, 120, 440, 340);
rect(65, 30, 670, 35);
rect(65, 535, 670, 35);
rect(30, 70, 35, 460);
rect(735, 70, 35, 460);
circle(47, 50, 60);
circle(755, 50, 60);
circle(47, 550, 60);
circle(755, 550, 60);
}

function take_snapshot(){
    save('image_ta.png');
}
