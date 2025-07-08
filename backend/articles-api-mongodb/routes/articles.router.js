const router = require("express").Router();
const AuthMiddleware = require("../middlewares/auth.middleware");
const ArticleController = require("../controllers/articles.controller");

router.post("/", AuthMiddleware, ArticleController.createArticle);


router.get("/", ArticleController.getAllArticles); // public route 

router.get("/user/:id", AuthMiddleware, ArticleController.getArticlesOfUser);

router.put("/:id", AuthMiddleware, ArticleController.updateArticleById);

router.delete("/:id", AuthMiddleware, ArticleController.deleteArticleById);

module.exports = router;
