async function handleLogin(e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const loginPayload = {
    email,
    password,
  };

  try {
    const res = await axios.post(
      "https://hare-krishna-article.onrender.com/auth/login",
      loginPayload
    );

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      // document.cookie = `article-token=${res.data.token}`;
      showSuccessToastForInterval(5000);
      setTimeout(() => {
        window.location.href = "../../index.html";
      }, 2000);
    }

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// access login form and add event listener
const registerForm = document.querySelector("#login-form");

registerForm.addEventListener("submit", handleLogin);

function showSuccessToastForInterval(timeInMs) {
  const successToast = document.querySelector("#toast-success");

  successToast.classList.remove("hidden");

  setInterval(() => {
    successToast.classList.add("hidden");
  }, timeInMs);
}
