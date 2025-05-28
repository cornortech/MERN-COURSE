// PROMISES
// A promise is a JavaScript object that links producing code and consuming code.

const getUserDetailsFromServer = () => {
  return new Promise(function (fullfill, reject) {
    // producing code - which takes time to process

    const user = {
      name: "ram",
      address: "spritual kingdom",
    };

      setTimeout(() => {
        //   fullfill(user);
      reject({
        message: "User not found",
      });
      }, 5000);
      

  });
};



// using async/await to consume the promise and try catch to handle the promise

async function handleFetchUserPromise() {
  try {
    const user = await getUserDetailsFromServer();

    console.log("Promise full filled ", user);
  } catch (error) {
    console.log("Promise rejected ", error);
  }
}

handleFetchUserPromise();








// consuming code - which will be executed when the promise is fullfilled / rejected

// getUserDetailsFromServer.then(
//   // fullfill callback function
//     function (value) {

//     console.log("Promise Fullfilled", value);
//     },
//   // reject callback function
//   function (error) {
//     console.log("Promise Rejected", error);
//   }
// );
