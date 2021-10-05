function start_audio() {
    navigator.mediaDevices.getUserMedia({audio:true});
    teachable=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PExaKNLPq/model.json",model_ready);
}
function model_ready() {
    teachable.classify(gotresults);
}
function gotresults(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_red=Math.floor(Math.random()*255)+1;
        random_blue=Math.floor(Math.random()*255)+1;
        random_green=Math.floor(Math.random()*255)+1;
    }
}