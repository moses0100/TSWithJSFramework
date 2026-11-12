// เป็นไฟล์ "เฉพาะสำหรับประกาศชนิดข้อมูล (type declarations)" เท่านั้น
// ใช้เมื่อไม่ต้องการ import/export (เช่น global types)
// ประกาศประเภทข้อมูลให้อยู่ใน scope ของโครงการทั้งระบบ (Global declaration)
// ไม่สามารถใส่ logic ได้ เช่น function, console.log, หรือ if

// กำหนด interface ของข้อมูลที่เราจะใช้ในการดึงข้อมูลจาก API
// ในที่นี้เราจะใช้ interface User ที่มีข้อมูลเกี่ยวกับผู้ใช้
interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}