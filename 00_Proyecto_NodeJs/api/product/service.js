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
exports.productService = void 0;
var dao_1 = require("./dao");
var getAllProducts = dao_1.productDao.getAllProducts, getProductById = dao_1.productDao.getProductById, createProduct = dao_1.productDao.createProduct, editProduct = dao_1.productDao.editProduct, deleteProduct = dao_1.productDao.deleteProduct;
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var product, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getProductById(id)];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, product];
                    case 2:
                        error_1 = _a.sent();
                        throw Error(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.getProducts = function (searchParams) {
        return __awaiter(this, void 0, void 0, function () {
            var category, salersId, filterByPrice, priceRange, _a, page, _b, limit, priceStart, priceEnd, sort, _c, start, end, products, error_2;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        category = searchParams.category, salersId = searchParams.salersId, filterByPrice = searchParams.filterByPrice, priceRange = searchParams.priceRange, _a = searchParams.page, page = _a === void 0 ? "1" : _a, _b = searchParams.limit, limit = _b === void 0 ? "10" : _b;
                        if (filterByPrice) {
                            sort = filterByPrice === "lower" ? 1 : -1;
                        }
                        if (priceRange) {
                            _c = priceRange.split(","), start = _c[0], end = _c[1];
                            priceStart = Number(start);
                            priceEnd = Number(end);
                        }
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getAllProducts(category, salersId, priceStart, priceEnd, sort, page, limit)];
                    case 2:
                        products = _d.sent();
                        return [2 /*return*/, products];
                    case 3:
                        error_2 = _d.sent();
                        throw Error(error_2.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.createProduct = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var newProduct, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, createProduct(product)];
                    case 1:
                        newProduct = _a.sent();
                        return [2 /*return*/, newProduct];
                    case 2:
                        error_3 = _a.sent();
                        throw Error(error_3.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.editProduct = function (id, product) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedProduct, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, editProduct(id, product)];
                    case 1:
                        updatedProduct = _a.sent();
                        return [2 /*return*/, updatedProduct];
                    case 2:
                        error_4 = _a.sent();
                        throw Error(error_4.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.prototype.deleteProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedProduct, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, deleteProduct(id)];
                    case 1:
                        deletedProduct = _a.sent();
                        return [2 /*return*/, deletedProduct];
                    case 2:
                        error_5 = _a.sent();
                        throw Error(error_5.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProductService;
}());
exports.productService = new ProductService();
