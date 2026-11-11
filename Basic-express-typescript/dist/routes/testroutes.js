"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// สร้าง route ที่ path / และส่ง response กลับไปว่า Hello World!
router.get("/", (_, res) => {
    res.send("Hello World!");
});
// สร้าง route ที่ path /about และส่ง response กลับไปว่า About Us!
router.get("/about", (_, res) => {
    res.send("About Us!");
});
exports.default = router;
