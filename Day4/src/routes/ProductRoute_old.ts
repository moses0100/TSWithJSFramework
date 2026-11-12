import express from "express";
import { Request, Response } from "express";

// สร้าง instance router ของ express
const router = express.Router();

// กำหนด interface สำหรับข้อมูล product
interface Product {
  id: number;
  name: string;
  price: number;
}

// สร้างตัวแปรชนิด array ที่มีข้อมูลเป็น object
const products: Product[] = [];

// GET /products สำหรับดึงข้อมูลสินค้าทั้งหมด
// http://localhost:3000/api/products
router.get("/products", (_: Request, res: Response): void => {
  // ส่ง response กลับไปที่ client
  res.json(products);
});

// GET /products/:id สำหรับดึงข้อมูลสินค้าตาม id
// http://localhost:3000/api/products/1
router.get("/products/:id", (req: Request<{ id: string }>, res: Response): void => {
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
router.post("/products", (req: Request, res: Response): void => {
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



export default router;