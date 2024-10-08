"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var getProduct = controller_1.productController.getProduct, getProducts = controller_1.productController.getProducts, createProduct = controller_1.productController.createProduct, deleteProduct = controller_1.productController.deleteProduct, editProduct = controller_1.productController.editProduct;
var productRouter = express_1.default.Router();
productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/addProduct", createProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.put("/editProduct/:id", editProduct);
exports.default = productRouter;
