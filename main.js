function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RLVGpgU7f/model.json", modelloaded);
}
function draw(){
    image(video, 0, 0, 300, 300);
} 
function modelloaded(){
    classifier.classify(video, gotresult)
}
function gotresult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);


}
