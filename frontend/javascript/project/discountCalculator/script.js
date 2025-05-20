const calculateButtonElm = document.querySelector("#calculateBtn");
function handleCalculateButtonClick(){
    // get bill amount  (billAmount)
    const billAmountElm = document.querySelector("#billAmountInput")
    const billAmount = Number(billAmountElm.value);
    // get discount percentage  (discountPercentage)
    const discountPercentageInput = document.querySelector("#disPerInput")
    const discountPercentage = Number(discountPercentageInput.value);
  // calculate total 
   const  total  = billAmount - (discountPercentage /100 * billAmount)
   console.log(total)
    // display it in the dom 
    document.querySelector("#totalAmount").innerText = total;
}
calculateButtonElm.addEventListener("click",handleCalculateButtonClick)


