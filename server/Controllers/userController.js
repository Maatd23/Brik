const { User, Product, Category, History } = require("../models");
const { comparePassword, encodeToken } = require("../helper/hasing");

class UserController {
  static async login(req, res, next) {
    try {
      const { username, email, password } = req.body;
      if (!email) throw { name: "email_required" };
      if (!password) throw { name: "password_required" };
      let user = "";
      if (email) {
        user = await User.findOne({ where: { email } });
      }
      if (username) {
        user = await User.findOne({ where: { username } });
      }
      if (!user) throw { name: "wrong" };
      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) throw { name: "wrong" };
      const token = encodeToken({ id: user.id });
      res.status(200).json({ access_token: token, email: user.email });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async register(req, res, next) {
    try {
      const {
        firstName,
        lastName,
        username,
        email,
        password,
        phoneNumber,
        address,
      } = req.body;
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password,
        phoneNumber,
        address,
      });
      res.status(201).json({
        message: `user with email ${user.email} has been created`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
