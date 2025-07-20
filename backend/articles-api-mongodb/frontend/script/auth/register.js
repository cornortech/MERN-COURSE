async function handleRegister(e) {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmpassword = document.querySelector("#confirm-password").value;

  const registerPayload = {
    username,
    email,
    password,
    confirmpassword,
  };

  if (password !== confirmpassword) {
    alert("Password doesn't match");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:8000/auth/register",
      registerPayload
    );

    if (res.status === 201) {
      showSuccessToastForInterval(5000);
      setTimeout(() => {
        window.location.href = "../../html/auth/login.html";
      }, 2000);
    }

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", handleRegister);

function showSuccessToastForInterval(timeInMs) {
  const successToast = document.querySelector("#toast-success");
  successToast.classList.remove("hidden");

  setInterval(() => {
    successToast.classList.add("hidden");
  }, timeInMs);
}
