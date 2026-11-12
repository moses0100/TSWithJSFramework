"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// สร้าง instance router ของ express
const router = express_1.default.Router();
// สร้างตัวแปรชนิด array ที่มีข้อมูลเป็น object
const products = [];
// GET /products สำหรับดึงข้อมูลสินค้าทั้งหมด
// http://localhost:3000/api/products
router.get("/products", (_, res) => {
    // ส่ง response กลับไปที่ client
    res.json(products);
});
// GET /products/:id สำหรับดึงข้อมูลสินค้าตาม id
// http://localhost:3000/api/products/1
router.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    // ค้นหาข้อมูลจาก array products ตาม id ที่รับมา
    const product = products.find((product) => product.id === id);
    // ถ้าไม่พบข้อมูลให้ส่ง status code 404 กลับไปที่ client
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    // ส่ง response กลับไปที่ client
    res.json(product);
});
// POST /products สำหรับเพิ่มข้อมูลสินค้า
router.post("/products", (req, res) => {
    // รับค่า request body จาก client
    if (!req.body) {
        res.status(400).json({ message: "Missing request body" });
        return;
    }
    const { id, name, price } = req.body;
    // ถ้าไม่มีข้อมูลให้ส่ง status code 400 กลับไปที่ client
    if (!id || !name || !price) {
        res.status(400).json({
            message: "Missing required fields: id, name, price",
        });
        return;
    }
    console.log(req.body);
    // เพิ่มข้อมูลลงใน array products
    products.push({ id, name, price });
    // ส่ง response กลับไปที่ client
    res.json({ message: "Product added successfully" });
});
exports.default = router;
