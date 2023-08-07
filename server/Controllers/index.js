const { Op } = require("sequelize");
const { Product, Category, Wishlist } = require("../models");

class Controller {
  static async findProduct(req, res, next) {
    try {
      let limit = 10;
      let page = req.query.page || 1;
      console.log(req.query.page);
      let sortCategory = req.query.fillter || null;
      let search = req.query.search || "";
      let option = {
        limit,
      };

      if (page) {
        option.offset = (page - 1) * limit;
      }
      if (sortCategory) {
        option.where.categoryId = sortCategory;
      }
      if (search) {
        option.where.name = { [Op.iLike]: `%${search}%` };
      }

      let { count, rows } = await Product.findAndCountAll(option);
      const result = {
        totalPage: Math.ceil(count / limit),
        data: rows,
        total: count,
      };
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async addWishlist(req, res, next) {
    try {
      let userId = req.user.id;
      let productId = req.body.productId;
      let product = await Product.findByPk(productId);
      if (!product) throw { name: "NotFound" };
      let wishlist = await Wishlist.create({ userId, productId });
      res.status(201).json({ message: "success added to whislist" });
    } catch (err) {
      next(err);
    }
  }
  static async getWishlist(req, res, next) {
    try {
      let userId = req.user.id;
      let wishlist = await Wishlist.findAll({
        where: {
          userId,
        },
        include: {
          model: Product,
        },
      });
      res.status(200).json(wishlist);
    } catch (err) {
      next(err);
    }
  }
  static async deleteWishlist(req, res, next) {
    try {
      let { id } = req.params;
      let wishlist = await Wishlist.findByPk(id);
      if (!wishlist) throw { name: "NotFound" };
      await wishlist.destroy();
      res.status(200).json({ messege: `${wishlist.name} success to delete` });
    } catch (err) {
      next(err);
    }
  }
  static async detailProduct(req, res, next) {
    try {
      let { id } = req.params;
      console.log(id);
      let product = await Product.findOne({
        where: {
          id,
        },
        include: {
          model: Category,
        },
      });
      if (!product) throw { name: "NotFound" };
      res.status(200).json(product);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) throw { name: "NotFound" };

      await product.destroy();
      res.status(200).json({ message: `${product.name} successfully deleted` });
    } catch (err) {
      console.log;
      next(err);
    }
  }
  static async createProduct(req, res, next) {
    try {
      const { name, description, price, stock, imgUrl, categoryId } = req.body;
      console.log(categoryId);
      let Products = await Product.create({
        name,
        description,
        price,
        stock,
        imgUrl,
        categoryId,
      });
      res.status(201).json(Products);
    } catch (err) {
      next(err);
    }
  }
  static async getCategory(req, res, next) {
    try {
      let all = await Category.findAll();
      res.status(200).json(all);
    } catch (err) {
      next(err);
    }
  }
  static async updateProduct(req, res, next) {
    try {
      const id = req.params.id;
      const { stock } = req.body;
      let findproduct = await Product.findByPk(id);
      if (!findproduct) throw { name: "NotFound" };
      let product = await Product.update(
        { stock },
        {
          where: {
            id: id,
          },
        }
      );
      await History.create({
        title: findproduct.name,
        description: `Product status with id ${id} has been update from ${findproduct.status} to ${status}`,
        updateBy: req.user.username || req.user.email,
      });
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
