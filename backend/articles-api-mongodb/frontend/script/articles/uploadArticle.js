// access to the article form
const articleForm = document.querySelector("#article-form");

// attach an event listener to the form

articleForm.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();

  // get the form data

  const title = document.querySelector("#title").value;
  const tags = document.querySelector("#tags").value;
  const description = document.querySelector("#description").value;

  const newArticle = {
    title: title,
    tags: tags.split(","),
    description: description,
  };

  // send the data to the server

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to create an article.");
    return;
  }

  const res = await axios.post(
    "https://hare-krishna-article.onrender.com/articles",
    {
      ...newArticle,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.status === 201) {
    alert("Article created successfully.");
    location.href = "../../index.html";
  }
}
