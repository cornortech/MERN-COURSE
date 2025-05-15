
// console.log(document.querySelector("#heading")) // returns first element with tag name h1
// console.log(document.querySelectorAll("h1")) // returns NodeList of all tags with  h1 



// let headingElement = document.querySelector("#heading");  // returns first element with id heading
// let boxElement = document.querySelector(".box"); // returns first element with class box

// let allHeadingElement = document.querySelectorAll("#heading");  // returns first element with id heading | NodeList[]
// let allBoxElement = document.querySelectorAll(".box"); // returns first element with class box | NodeList[]


let bodyElement = document.querySelector("body")


function changeBgColor(){

    let redColorIntensity  = Math.floor( Math.random() * 255 ); // 0-255    
    let greenColorIntensity =  Math.floor( Math.random() * 255 ); // 0-255    
    let blueColorIntensity = Math.floor( Math.random() * 255 ); // 0-255    

    console.log(redColorIntensity,greenColorIntensity,blueColorIntensity)

    bodyElement.style.backgroundColor= `rgb(${redColorIntensity},${greenColorIntensity},${blueColorIntensity})`
}


setInterval(changeBgColor,500)