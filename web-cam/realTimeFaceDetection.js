const video = document.getElementById('video')


function startVideo() {
    navigator.gerUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}
startVideo()