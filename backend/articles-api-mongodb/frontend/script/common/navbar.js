async function setupNavbar() {
  const userData = await getLoggedInUser();

  if (userData) {
    document.querySelector("#register-button").classList.add("hidden");
    document.querySelector("#navbar-icon").classList.add("flex");
    document.querySelector("#navbar-icon").classList.remove("hidden");

    document.querySelector("#nav-username").innerText = userData.username;
    document.querySelector("#nav-email").innerText = userData.email;

    document.querySelector("#logout-button").addEventListener("click", logout);
  } else {
    // will be executed if there is no user
    document.querySelector("#register-button").classList.remove("hidden");
    document.querySelector("#navbar-icon").classList.remove("flex");
    document.querySelector("#navbar-icon").classList.add("hidden");
  }
}

setupNavbar();

function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}




