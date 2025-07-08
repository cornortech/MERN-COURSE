const UserModel = require("../model/user.model");

class UserService {
  static async createUser(newUser) {
    try {
      await UserModel.create(newUser);
    } catch (error) {
      throw new Error(error.message || "Failed to create user");
    }
  }

  static async deleteUser(userId) {
    try {
      await UserModel.findByIdAndDelete(userId);
    } catch (error) {
      throw new Error(error.message || "Failed to delete user");
    }
  }
}

module.exports = UserService;
