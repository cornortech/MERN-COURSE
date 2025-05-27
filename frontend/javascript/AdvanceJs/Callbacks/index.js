const sum = (num1, num2, cb) => {
  const sumResult = num1 + num2;
  cb(sumResult);
};

const displayResult = (result) => {
  console.log(result);
};

// A callback is a function passed as an argument to another function

sum(77, 55, displayResult);








function renderHelloWorld() {
  console.log("Hello World");
}


// setTimeout -> arguement -> renderHellWorld (callback function)

setTimeout(renderHelloWorld , 5000);