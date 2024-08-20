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
exports.userService = void 0;
var dao_1 = require("./dao");
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var getAllUsers = dao_1.userDao.getAllUsers, getUserById = dao_1.userDao.getUserById, getUserByMail = dao_1.userDao.getUserByMail, createUser = dao_1.userDao.createUser, editUser = dao_1.userDao.editUser, deleteUser = dao_1.userDao.deleteUser;
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getUserById(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        error_1 = _a.sent();
                        throw Error(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getAllUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                    case 2:
                        error_2 = _a.sent();
                        throw Error(error_2.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.createUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, createUser(user)];
                    case 1:
                        newUser = _a.sent();
                        return [2 /*return*/, newUser];
                    case 2:
                        error_3 = _a.sent();
                        throw Error(error_3.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.loginUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, existingUser, isPasswordValid, token, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        email = user.email, password = user.password;
                        return [4 /*yield*/, getUserByMail(email)];
                    case 1:
                        existingUser = _a.sent();
                        if (!existingUser) {
                            throw new Error("Invalid email");
                        }
                        return [4 /*yield*/, (0, bcrypt_1.compare)(password, existingUser.password)];
                    case 2:
                        isPasswordValid = _a.sent();
                        if (!isPasswordValid) {
                            throw new Error("Invalid password");
                        }
                        token = (0, jsonwebtoken_1.sign)({
                            userId: existingUser._id,
                            email: existingUser.email,
                            role: existingUser.role,
                        }, process.env.JWT_SECRET, { expiresIn: "1h" });
                        return [2 /*return*/, token];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error(error_4.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserService;
}());
exports.userService = new UserService();
