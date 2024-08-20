"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dbConnect_1 = require("./db/dbConnect");
var dotenv_1 = require("dotenv");
var routes_1 = require("./routes");
dotenv_1.default.config();
var PORT = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000", 10);
var HOST = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : "localhost";
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_1.default);
(0, dbConnect_1.default)();
app.listen(PORT, HOST, function () {
    console.log("Server is running on http://".concat(HOST, ":").concat(PORT));
});
