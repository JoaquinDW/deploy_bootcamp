"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var orderHistorySchema = new mongoose_1.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    carts: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Cart",
            required: true,
        },
    ],
});
var OrderHistory = (0, mongoose_1.model)("OrderHistory", orderHistorySchema);
exports.default = OrderHistory;
