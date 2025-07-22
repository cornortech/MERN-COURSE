const mongoose = require("mongoose");
const ArticleService = require("../services/article.service");
const UserService = require("../services/user.services");

class ArticleController {
  static async createArticle(req, res) {
    try {
      if (!req.body.title || !req.body.description || !req.userId) {
        return res.status(403).json({
          success: false,
          message: "Please fill all the fields",
        });
      }

      const newArticlePayload = {
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        userId: req.userId,
      };

      await ArticleService.createArticle(newArticlePayload);

      res.status(201).json({
        success: true,
        message: "Article created successfully.",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: `${error.message || "Something went wrong"} `,
      });
    }
  }

  static async getAllArticles(req, res) {
    try {
      const articles = await ArticleService.getArticles({});

      res.json({
        message: true,
        data: articles,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `${error.message || "Something went wrong.."}`,
      });
    }
  }

  static async getArticleById(req, res) {
    try {
      const articleId = req.params.id;

      if (!mongoose.isValidObjectId(articleId)) {
        return res.status(403).json({
          success: false,
          message: "Invalid article id",
        });
      }

      const articleExist = await ArticleService.getSingleArticle({
        _id: articleId,
      })

      if (!articleExist) {
        return res.status(404).json({
          success: false,
          message: "Article not found with this id.",
        });
      }

      res.status(200).json({
        success: true,
        data: articleExist,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `${error.message || "Something went wrong.."}`,
      });
    }
  }

  static async getArticlesOfUser(req, res) {
    try {
      const userId = req.params.id;
      // const userExist = await userModel.findById(userId);

      const userExist = await UserService.getSingleUser({
        _id: userId,
      });

      if (!userExist) {
        return res.status(404).json({
          success: false,
          message: "User not found with this id.",
        });
      }

      // const articles = await ArticleModel.find({
      //   userId: userId,
      // });

      const articles = await ArticleService.getArticles({
        userId: userId,
      });

      res.status(200).json({
        success: true,
        data: articles,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `${error.message || "Something went wrong.."}`,
      });
    }
  }

  static async updateArticleById(req, res) {
    try {
      const articleId = req.params.id;
      // const articleExist = await ArticleModel.findById(articleId);

      const articleExist = await ArticleService.getSingleArticle({
        _id: articleId,
      });

      if (!articleExist) {
        return res.status(404).json({
          message: "Article not found with this id.",
        });
      }

      const articleOwnerId = articleExist.userId.toString();
      const requestUserId = req.userId;

      if (articleOwnerId !== requestUserId) {
        return res.status(401).json({
          success: false,
          message: "You are unauthorized",
        });
      }

      // await ArticleModel.findByIdAndUpdate(articleId, {
      //   $set: {
      //     title: req.body.title || articleExist.title,
      //     description: req.body.description || articleExist.description,
      //     tags: req.body.tags || articleExist.tags,
      //   },
      // });

      const updatePayload = {
        title: req.body.title || articleExist.title,
        description: req.body.description || articleExist.description,
        tags: req.body.tags || articleExist.tags,
      };

      await ArticleService.updateArticle(
        {
          _id: articleId,
        },
        updatePayload
      );

      res.status(200).json({
        success: true,
        message: "Article udpated successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `${error.message || "Something went wrong.."}`,
      });
    }
  }

  static async deleteArticleById(req, res) {
    try {
      // authorization - if user has a permission to to the action
      const articleId = req.params.id;

      console.log("inside delete route handler", req.userId);

      if (!mongoose.isValidObjectId(articleId)) {
        return res.status(403).json({
          success: true,
          message: "Invalid article id",
        });
      }

      // const articleExist = await ArticleModel.findById(articleId);
      const articleExist = await ArticleService.getSingleArticle({
        _id: articleId,
      });

      if (!articleExist) {
        return res.status(404).json({
          success: false,
          message: "Article not found with this id.,",
        });
      }

      const articleOwnerId = articleExist.userId.toString();
      const requestUserId = req.userId;

      // authorization request user id
      if (articleOwnerId !== requestUserId) {
        return res.status(401).json({
          success: false,
          message: "You are unauthorized",
        });
      }

      console.log("article", articleExist);

      await ArticleService.deleteArticle({
        _id: articleId,
      });

      res.status(200).json({
        success: true,
        message: "Article deleted successfully.",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `${error.message || "Something went wrong.."}`,
      });
    }
  }
}

module.exports = ArticleController;
