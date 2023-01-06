function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);

    stroke(168, 10,10);
    fill(168,10,10);

    circle(40,40,40);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    

    tint(tint_color);
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){
    save('student_name.png');
}