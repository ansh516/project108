Webcam.set({
 width:350,
 height:300,
 image_format : 'png',
 png_quality:90   
});
camera = document.getElementById("camera");
Webcam.attach( '#camera' );
function take_snapshot() {
    Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';                  
    });
}
console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model/json'
)
function modelLoaded() {
    console.log('Model Loaded!')
}

function check() {
    img = document.getElementById('captured_image');
    classfifer.classify(img, gotResult);
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first Predition is " + prediction_1;
    speak_data_2 = "And the second prediction is "+ prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
  }


  function gotResult(error, result) {
     if (error) {
    console.error(error);
     } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = result[0].label;
    document.getElementById("result_emotion_name").innerHTML = result[1].label;
    prediction_1 = result[0].label;
    prediction_2 = result[1].label;
    speak();
    if (result[0].label == "victory") {
    document.getElementById("update_emoji").innerHTML = "&#9996;";    
    }

    if (result[0].label == "best") {
    document.getElementById("update_emoji").innerHTML = "&#128077;";    
    } 

    if (result[0].label == "ok") {
    document.getElementById("update_emoji").innerHTML = "&#128076;";    
    } 

    if (result[1].label == "victory") {
    document.getElementById("update_emoji").innerHTML = "&#9996;";    
     }
    
    if (result[1].label == "best") {
    document.getElementById("update_emoji").innerHTML = "&#128077;";    
    } 
    
    if (result[1].label == "ok") {
    document.getElementById("update_emoji").innerHTML = "&#128076;";    
    }
    } 
    }