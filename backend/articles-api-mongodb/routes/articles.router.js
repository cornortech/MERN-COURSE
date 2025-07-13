const router = require("express").Router();
const AuthMiddleware = require("../middlewares/auth.middleware");
const ArticleController = require("../controllers/articles.controller");

/**
 * @openapi
 * /articles:
 *   post:
 *     tags:
 *       - Articles
 *     summary: This route is used to create a new article.
 *     description: This route is used to create a new article.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Authorization token
 *         type: string
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - tags
 *             properties:
 *               title:
 *                 type: string
 *                 example: Title of the article
 *               description:
 *                 type: string
 *                 example: Description of the article
 *               tags:
 *                 type: array
 *                 example: ["tag1", "tag2", "tag3"]
 *     responses:
 *       201:
 *         description: Article created successfully.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 *
 */
router.post("/", AuthMiddleware, ArticleController.createArticle);

router.get("/", ArticleController.getAllArticles); // public route

router.get("/user/:id", AuthMiddleware, ArticleController.getArticlesOfUser);

router.put("/:id", AuthMiddleware, ArticleController.updateArticleById);

router.delete("/:id", AuthMiddleware, ArticleController.deleteArticleById);

module.exports = router;
