const inputElement = document.querySelector("#textInput")
function handleInputElementChange(event) {

    
    const inputElementRef =  event.target;
    const inputElementValue = inputElementRef.value;
    const currentCharacterCount = inputElementValue.length;



    const currentCharacterCountElement = document.querySelector("#currentCharacterCount")
    currentCharacterCountElement.innerText=currentCharacterCount;


    const remainingCharacterCountElement = document.querySelector("#remainingCharacterCount");
    remainingCharacterCountElement.innerText=50 - currentCharacterCount;
}

inputElement.addEventListener("input",handleInputElementChange)











// make  a function 

// get the  value which is inside the input


// count the values length 


//  accesss the current counter element and insert count value 


// access the remaining counter element and insert remainint count value 50 - values length