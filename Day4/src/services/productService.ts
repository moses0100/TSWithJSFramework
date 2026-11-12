import pool from "../utils/db";
import Product from "../models/productModel";

// อ่านข้อมูลสินค้าทั้งหมด
export const getAllProducts = async (): Promise<Product[]> => {
    const client = await pool.connect()
    try {
        const result = await client.query('SELECT * FROM products ORDER BY id DESC')
        return result.rows.map(row => new Product(
            row.id,
            row.name,
            row.price
        ))
    } finally {
        client.release()
    }
}

// อ่านข้อมูลสินค้าตาม id
export const getProductById = async (id: number): Promise<Product | null> => {
    const client = await pool.connect()
    try {
        const result = await client.query('SELECT * FROM products WHERE id = $1', [id])
        if (result.rows.length === 0) {
            return null
        }

        const row = result.rows[0]
        return new Product(
            row.id,
            row.name,
            row.price
        )
    } finally {
        client.release()
    }
}

// เพิ่มข้อมูลสินค้าใหม่
export const createProduct = async (name: string, price: number): Promise<Product> => {
    const client = await pool.connect()
    try {
        const result = await client.query(
            'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
            [name, price]
        )
        const row = result.rows[0]
        return new Product(row.id, row.name, row.price)
    } finally {
        client.release()
    }
}

// แก้ไขข้อมูลสินค้า
export const updateProduct = async (id: number, name: string, price: number): Promise<Product> => {
    const client = await pool.connect()
    try {
        const result = await client.query(
            'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *',
            [name, price, id]
        )
        if (result.rows.length === 0) {
            throw new Error(`Product with id ${id} not found`)
        }

        const row = result.rows[0]
        return new Product(row.id, row.name, row.price)
    } finally {
        client.release()
    }
}

// ลบสินค้าตาม id และคืนข้อมูลสินค้าที่ถูกลบ
export const deleteProduct = async (id: number): Promise<Product | null> => {
    const client = await pool.connect()
    try {
        const result = await client.query('DELETE FROM products WHERE id = $1 RETURNING *', [id])
        if (result.rows.length === 0) {
            return null
        }

        const row = result.rows[0]
        return new Product(row.id, row.name, row.price)
    } finally {
        client.release()
    }
}

