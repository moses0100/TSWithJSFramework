import express from 'express'
import { Request, Response } from "express";
const router = express.Router()

// สร้าง route ที่ path / และส่ง response กลับไปว่า Hello World!
router.get("/", (_: Request, res: Response): void => {
  res.send("Hello World!");
});

// สร้าง route ที่ path /about และส่ง response กลับไปว่า About Us!
router.get("/about", (_: Request, res: Response): void => {
  res.send("About Us!");
});

export default router