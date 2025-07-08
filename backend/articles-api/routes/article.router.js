const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const fs = require("fs");

//********************* API ROUTES FOR  ARTICLES  ************** */

// route to create article

router.post("/articles", (req, res) => {
  const { userId, title, description, tags } = req.body;

  if (!userId || !title || !description || !tags) {
    return res.status(403).json({
      message: "Please fill all the fields.",
    });
  }

  const newArticle = {
    id: uuid(),
    userId,
    title,
    description,
    tags,
  };

  const articlesFileData = fs.readFileSync("./db/articles.json", "utf-8");

  const dbArticles = JSON.parse(articlesFileData);

  dbArticles.push(newArticle);

  fs.writeFileSync("./db/articles.json", JSON.stringify(dbArticles));

  res.status(201).json({
    message: "Article created successfully",
    success: true,
  });
});

// route to read / get the articles
// http://localhost:8000/articles

router.get("/articles", (req, res) => {
  const articlesFileData = fs.readFileSync("./db/articles.json", "utf-8");
  const dbArticles = JSON.parse(articlesFileData);

  res.status(200).json({
    success: true,
    data: dbArticles,
  });
});

// route to get article by id
// example : http://localhost:8000/articles/231434

router.get("/articles/:id", (req, res) => {
  const requestedArticleId = req.params.id; // 231434

  const articlesJsonData = fs.readFileSync("./db/articles.json", "utf-8");
  const dbArticles = JSON.parse(articlesJsonData);

  const articleExist = dbArticles.find(
    (article) => article.id === requestedArticleId
  );

  if (!articleExist) {
    return res.status(404).json({
      success: false,
      message: `Article not found with id:  ${requestedArticleId}`,
    });
  }

  res.status(200).json({
    success: true,
    data: articleExist,
  });
});

// route to update an articles

router.put("/articles/:id", (req, res) => {
  const articleIdToBeUpdated = req.params.id; // 231434

  const articlesJsonData = fs.readFileSync("./db/articles.json", "utf-8");
  const dbArticles = JSON.parse(articlesJsonData);

  const articleExist = dbArticles.find(
    (article) => article.id === articleIdToBeUpdated
  );

  if (!articleExist) {
    return res.status(404).json({
      success: false,
      message: `Article not found with id:  ${articleIdToBeUpdated}`,
    });
  }

  const updatedArticles = dbArticles.map((article) => {
    if (article.id === articleIdToBeUpdated) {
      return {
        id: article.id,
        title: req.body.title || article.title,
        description: req.body.description || article.description,
        tags: req.body.tags || article.tags,
      };
    } else {
      return article;
    }
  });

  fs.writeFileSync("./db/articles.json", JSON.stringify(updatedArticles));

  res.status(200).json({
    success: true,
    message: "Article updated successfully",
  });
});

// route to delete an articles

router.delete("/articles/:id", (req, res) => {
  const articleIdToBeDeleted = req.params.id;

  const articlesJsonData = fs.readFileSync("./db/articles.json", "utf-8");
  const dbArticles = JSON.parse(articlesJsonData);

  const articleExist = dbArticles.find(
    (article) => article.id === articleIdToBeDeleted
  );

  if (!articleExist) {
    return res.status(404).json({
      success: false,
      message: `Article not found with id:  ${articleIdToBeDeleted}`,
    });
  }

  const remainingArticle = dbArticles.filter(
    (article) => article.id !== articleIdToBeDeleted
  );

  const remainingArticleInJson = JSON.stringify(remainingArticle);

  fs.writeFileSync("./db/articles.json", remainingArticleInJson);

  res.status(200).json({
    success: true,
    message: "Article deleted successfully",
  });
});

module.exports = router;
