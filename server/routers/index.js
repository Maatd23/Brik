const router = require("express").Router();
const AdminController = require("../Controllers/adminController");
const Controller = require("../Controllers/");
const UserController = require("../Controllers/userController");

router.post("/registers/users", UserController.register);
router.post("/registers/admin", AdminController.register);
router.post("/login", UserController.login);
router.post("/login", AdminController.login);
router.get("/products", Controller.findProduct);
router.get("/products/:id", Controller.detailProduct);
router.post("/products", Controller.createProduct);
router.delete("/products/:id", Controller.deleteProduct);
router.patch("/products/:id", Controller.updateProduct);
router.get("/categories", Controller.getCategory);
router.post("/wishlisht", Controller.addWishlist);
router.get("/wishlisht", Controller.getWishlist);

module.exports = router;
