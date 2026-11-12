import type { Request, Response } from "express";
import * as productService from "../services/productService"

// อ่านและแสดงข้อมูลสินค้าทั้งหมด
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts()
        res.status(200).json(products)
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

// อ่านและแสดงข้อมูลสินค้าตาม id
export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const product = await productService.getProductById(id)
        if (product === null) {
            res.status(404).json({
                message: 'Product not found'
            })
        } else {
            res.status(200).json(product)
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

// เพิ่มข้อมูลสินค้าใหม่
export const createProduct = async (req: Request, res: Response): Promise<void> => {
    const { name, price } = req.body

    try {
        const product = await productService.createProduct(name, price)
        res.status(201).json(product)
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

// แก้ไขข้อมูลสินค้าตาม id
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id)
    const { name, price } = req.body

    try {
        const product = await productService.updateProduct(id, name, price)
        res.status(200).json(product)
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

// ลบสินค้าตาม id
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id)

    try {
        const product = await productService.deleteProduct(id)
        if (product === null) {
            res.status(404).json({
                message: 'Product not found'
            })
            return
        }

        res.status(200).json({
            message: 'Product deleted',
            product
        })
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: err.message
        })
    }
}

