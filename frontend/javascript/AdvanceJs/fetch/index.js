/**
 * Make a request GET to server `jsonplaceholder.typicode.com` to fetch the user data
 */

/**
 * HTTP REQUEST
 * GET - when we are retreiving data from server (R)
 * POST  - when we are sending data to server for creating resource in db (C)
 * PUT - when we are sending data to server for updating resource in db (U)
 * DELETE - when we are sending data to server for delete resource in db (D)
 */

const API_URL = "https://jsonplaceholder.typicode.com/users";

// function fetchUsersDataFromServer() {

//   // using inbuilt fetch function to make http request to the server

//   fetch(API_URL).then(
//     // this is the callback fuction which will be called back when promise is resolve/fullfilled
//     function (response) {
//       console.log("promise fullfilled - successfully api fetched ...");

//       //retrieve data that is send by the server
//       response.json().then(
//         function (data) {
//           console.log(
//             "promise fullfilled - successfully parsed json data from response body... "
//           );
//           console.log("This is the data send by the server ", data);
//         },
//         function () {
//           console.log(
//             "promise rejected - failed to parse json from response body"
//           );
//         }
//       );
//     },

//     // this is the callback function which will be called back when promise is rejected
//     function (error) {
//       console.log("promise rejected - failed to fetch api...", error);
//     }
//   )
// }

// fetchUsersDataFromServer();

// replacing .then with async/ await
async function fetchUsersDataFromServer() {
  try {
    // using inbuilt fetch function to make http request to the server
    const response = await fetch(API_URL);

    //retrieve data that is send by the server
    const userArray = await response.json();

    const appContainerElm = document.querySelector(".appContainer");

    userArray.forEach(function (eachUser) {
      console.log("inside the function", eachUser);

      appContainerElm.innerHTML += `
                <div class="userBox">
                <strong> ${eachUser.name} </strong>
                <p>${eachUser.email}</p>
                <p>City : ${eachUser.address.city}</p>
                <p>street : ${eachUser.address.street}</p>
                <p>Phone : ${eachUser.phone}</p>
                <a href=https://${eachUser.website} target="_blank"> <button>Visit website</button></a>
            </div>
          `;
    });
  } catch (error) {
    console.log("promise rejected - failed to fetch api...", error);
  }
}

fetchUsersDataFromServer();




