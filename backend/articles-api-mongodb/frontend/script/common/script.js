// function to get the loggedIn user .
let userData = null;
let apikey = "apikey";
// asynchronous function to fetch the logged-in user

async function getLoggedInUser() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  try {
    const res = await axios.get(
      "https://hare-krishna-article.onrender.com/auth/logged-in-user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      userData = res.data.user;
      return userData;
    }
  } catch (error) {
    console.error("Error fetching logged-in user:", error);
  }
}
