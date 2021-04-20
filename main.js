song_Life_Of_Ram = "";
song_okey_oka_lokam = "";
left_x = "0";
left_y = "0";
right_x = "0";
right_y = "0";



function preload() {
    song_Life_Of_Ram = loadSound("The Life Of Ram.mp3");
    song_okey_oka_lokam = loadSound("Okey Oka Lokam.mp3");
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, Model_loaded);
    poseNet.on('pose', got_poses);


}


function Model_loaded() {
    console.log("Model Loaded !!");
}


function draw() {
    image(video, 0, 0, 500, 400);
}

function got_poses(result) {
    if (result.length > 0) {
        console.log(result);
        left_x = result[0].pose.leftWrist.x;
        left_Wrist_y = result[0].pose.leftWrist.y;
        right_x = result[0].pose.rightWrist.x;
        right_y = result[0].pose.rightWrist.y;
    }

}