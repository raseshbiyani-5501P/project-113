function preload(){


}

function setup(){

    canvas =createCanvas(800, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();
    

}

function draw(){

    image(video, 200, 150, 400, 250);
    rect(50, 90, 60, 350);
    rect(700, 90, 60,350);
    
    circle(80, 70, 70 );
    circle(80,450, 70);
    circle(730, 70,70);
    circle(730, 450,70);


}