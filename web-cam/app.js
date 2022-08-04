let canvas = document.querySelector("#photoCanvas");
let context = canvas.getContext("2d");
let video = document.querySelector("#videoElement");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
        video.srcObject = stream;
        video.play();
    });
}



document.getElementById("takePhoto").addEventListener("click", () => {
    context.drawImage(video, 0, 0, 300, 200);
});