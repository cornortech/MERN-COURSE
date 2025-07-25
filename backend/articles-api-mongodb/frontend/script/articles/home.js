async function fetchAllArticles() {
  try {
    const res = await axios.get("https://hare-krishna-article.onrender.com/articles");

    if (res.status === 200) {
      const articlesData = res.data.data;

      const articlesContainer = document.querySelector("#articles-container");

      //   loop through the articles data array and insert each article into the articles container
      articlesData.forEach((article) => {
        articlesContainer.innerHTML += `
    <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
           ${article.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${article.description.substring(0, 200)}
        </p>

        <div class="flex items-center mb-4">
          <p>Owner :</p>
          <i class="text-blue-700">${
            article.userId ? article.userId.username : "N/A"
          } </i>
        </div>

        <a
          href="./html/articles/articleDetails.html?articleId=${article._id}"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>





        `;
      });
    }
  } catch (error) {
    console.log(error);
  }
}

fetchAllArticles();
