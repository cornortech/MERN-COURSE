const bcrypt = require("bcryptjs");

class AuthService {
  static hashPassword(plainPasswordText) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(plainPasswordText, salt);
    return hash;
  }
  static verifyPassword(plainText, hashedText) {
    return bcrypt.compareSync(plainText, hashedText);
  }
}

module.exports = AuthService;
