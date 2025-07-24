async function fetchArticleDetail(articleId) {
  try {
    const res = await axios.get(`https://hare-krishna-article.onrender.com/articles/${articleId}`);
    if (res.status === 200) {
      const articleData = res.data.data;
      console.log(articleData);

      document.querySelector("#article-title").innerText = articleData.title;
      document.querySelector("#article-description").innerText =
        articleData.description;
      document.querySelector("#owner-username").innerText = articleData.userId
        ? articleData.userId.username
        : "N/A";
      document.querySelector("#article-date").innerText = new Date(
        articleData.updatedAt
      ).toLocaleString();
    }
  } catch (error) {
    console.log(error);
  }
}

let articleId = new URLSearchParams(window.location.search).get("articleId");

// console.log(window.location.search)

fetchArticleDetail(articleId);
