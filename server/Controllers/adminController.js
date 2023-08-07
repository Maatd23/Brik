const { Admin, Product, Category, History } = require("../models");
const { comparePassword, encodeToken } = require("../helper/hasing");

class AdminController {
  static async login(req, res, next) {
    try {
      const { email, password, username } = req.body;
      if (!email || !username) throw { name: "email_required" };
      if (!password) throw { name: "password_required" };
      let admin = "";
      if (email) {
        admin = await Admin.findOne({ where: { email } });
      }
      if (username) {
        admin = await Admin.findOne({ where: { username } });
      }
      if (!admin) throw { name: "wrong" };
      const isValidPassword = comparePassword(password, admin.password);
      if (!isValidPassword) throw { name: "wrong" };
      const token = encodeToken({ id: admin.id });
      res.status(200).json({ access_token: token, email: admin.email });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async register(req, res, next) {
    try {
      const {
        username,
        email,
        password,
        phoneNumber,
        address,
        firstName,
        lastName,
      } = req.body;
      const admin = await Admin.create({
        firstName,
        lastName,
        username,
        email,
        password,
        phoneNumber,
        address,
      });
      res.status(201).json({
        message: `user with email ${admin.email} has been created`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminController;
