import express from "express";
import * as productcontroller from "../controllers/productcontroller"

// สร้าง router สำหรับกำหนดเส้นทาง API ของสินค้า
const router = express.Router();

// GET /api/products: ดึงข้อมูลสินค้าทั้งหมด
router.get('/products', productcontroller.getAllProducts)
// POST /api/products: เพิ่มสินค้าใหม่ โดยรับ name และ price จาก request body
router.post('/products', productcontroller.createProduct)
// เส้นทางต่อไปนี้ใช้ :id แทนรหัสสินค้าที่ต้องการจัดการ เช่น /api/product/1
// GET /api/product/:id: ดึงข้อมูลสินค้าตามรหัส
router.get('/product/:id', productcontroller.getProductById)
// PUT /api/product/:id: แก้ไขชื่อและราคาของสินค้าตามรหัส
router.put('/product/:id', productcontroller.updateProduct)
// DELETE /api/product/:id: ลบสินค้าตามรหัส
router.delete('/product/:id', productcontroller.deleteProduct)
export default router

