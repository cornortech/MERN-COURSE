let video = document.getElementById('video');
let stream;

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert('Error accessing camera: ' + err.message);
  }
}

function stopCamera() {
  if (stream) {
    let tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
  }
}

// document.querySelector("#startButton").addEventListener("click",startCamera);


// document.querySelector("#closeButton").addEventListener("click",stopCamera)