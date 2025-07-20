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

  static async getSingleUser(filter) {
    try {
      const userExist = await UserModel.findOne(filter);
      return userExist;
    } catch (error) {
      throw new Error("User not found");
    }
  }
}

module.exports = UserService;
