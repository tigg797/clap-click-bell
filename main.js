function startClassification() {
    var smt = navigator.mediaDevices
    smt.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier(
        'https://teachablemachine.withgoogle.com/models/M8jw4szDY/model.json'
        , modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        rnd_r = Math.floor(Math.random() * 255) + 1;
        rnd_g = Math.floor(Math.random() * 255) + 1;
        rnd_b = Math.floor(Math.random() * 255) + 1;

        rslt = document.getElementById("result_label")
        rslt.innerHTML = "I can hear: " + results[0].label;
        confi = (results[0].confidence * 100).toFixed(2) + '%'
        accu = document.getElementById("confidence_label")
        accu.innerHTML = "I am " + confi + " sure";
        rslt.style.color = "rgb(" + rnd_r + "," + rnd_g + "," + rnd_b + ")";
        accu.style.color = "rgb(" + rnd_g + "," + rnd_b + "," + rnd_r + ")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if (results[0].label == "Clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        } else if (results[0].label == "Bell") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        } else if (results[0].label == "Click") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        } else { 
                img1.src = "aliens-01.png";
                img2.src = "aliens-02.png"; 
                img3.src = "aliens-03.png"; 
                img4.src = "aliens-04.gif";  
        }
    } 
}
function myFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("https://tigg797.github.io/clap-click-bell/");
    // Alert the copied text
    alert("Copied the link: tigg797.github.io/clap-click-bell");
  }