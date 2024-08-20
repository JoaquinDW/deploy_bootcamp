"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var addCart = controller_1.cartController.addCart;
var cartRouter = express_1.default.Router();
cartRouter.post("/addCart", addCart);
exports.default = cartRouter;
