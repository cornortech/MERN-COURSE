
// global scope variable; 
let stream = null;

async function openCamera() {
  try {



     stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    });

 
//  local scope / block scope variable 
    const mirrorElm = document.querySelector("#mirrorBox")

    if(mirrorElm){
        mirrorElm.srcObject = stream;
        mirrorElm.play()
    }
    

  } catch (error) {
    console.log("Error accessing camera:", error);
  }
}

async function closeCamera(){
  

  try {
    
    await stream.getTracks().forEach(track=>track.stop())

    const mirrorElm = document.querySelector("#mirrorBox")

    if(mirrorElm){
        mirrorElm.srcObject = null;
        stream= null;

    }

    
  } catch (error) {
    console.log(error)
  }
}

document.querySelector("#toggleCamera").addEventListener("click",function(){

  if(stream){
    closeCamera()
  }else{
    openCamera()
  }

})


openCamera()


