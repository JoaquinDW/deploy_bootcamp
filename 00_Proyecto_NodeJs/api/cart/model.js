"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var cartModel = new mongoose_1.Schema({
    products: [
        {
            product_id: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            }
        },
    ],
    total_price: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    expires_at: {
        type: Date,
        default: new Date().setDate(new Date().getDate() + 2),
    },
});
var Cart = (0, mongoose_1.model)("Cart", cartModel);
exports.default = Cart;
