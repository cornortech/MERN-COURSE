const articleModel = require("../model/article.model");

class ArticleService {
  static async createArticle(newArticle) {
    try {
      await articleModel.create(newArticle);
    } catch (error) {
      throw new Error("Failed to create article");
    }
  }

  static async getSingleArticle(filter = {}) {
    try {
      const articleExist = await articleModel.findOne(filter);
      return articleExist;
    } catch (error) {
      throw new Error("Failed to get article");
    }
  }

  static async getArticles(filter = {}) {
    try {
      const articles = await articleModel.find(filter).populate({
        path: "userId",
        select: "username email",
      });
      return articles;
    } catch (error) {
      throw new Error("Failed to get articles");
    }
  }

  static async deleteArticle(filter) {
    try {
      if (!filter) return;
      await articleModel.deleteOne(filter);
    } catch (error) {
      throw new Error("Failed to delete article");
    }
  }

  static async updateArticle(filter, updatePayload) {
    try {
      if (!filter) return;
      await articleModel.updateOne(filter, {
        $set: updatePayload,
      });
    } catch (error) {
      throw new Error("Failed to update article");
    }
  }
}

module.exports = ArticleService;
