"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
var service_1 = require("./service");
var getProduct = service_1.productService.getProduct, getProducts = service_1.productService.getProducts, createProduct = service_1.productService.createProduct, deleteProduct = service_1.productService.deleteProduct, editProduct = service_1.productService.editProduct;
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.getProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getProduct(id)];
                    case 2:
                        product = _a.sent();
                        return [2 /*return*/, res.status(200).json(product)];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: error_1 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.getProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var searchParams, products, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchParams = req.query;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getProducts(searchParams)];
                    case 2:
                        products = _a.sent();
                        return [2 /*return*/, res.status(200).json(products)];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: error_2 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.createProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, newProduct, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createProduct(product)];
                    case 2:
                        newProduct = _a.sent();
                        return [2 /*return*/, res.status(200).json(newProduct)];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_3 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.deleteProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deletedProduct, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, deleteProduct(id)];
                    case 2:
                        deletedProduct = _a.sent();
                        return [2 /*return*/, res.status(200).json(deletedProduct)];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: error_4 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.prototype.editProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, editedProductBody, editedProduct, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        editedProductBody = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, editProduct(id, editedProductBody)];
                    case 2:
                        editedProduct = _a.sent();
                        return [2 /*return*/, res.status(200).json(editedProduct)];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: error_5 })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.productController = new ProductController();
