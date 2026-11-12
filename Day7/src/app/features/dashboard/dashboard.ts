import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

// เพิ่ม type สำหรับสถานะคำสั่งซื้อและสถานะผู้ใช้
export type OrderStatus = 'จัดส่งแล้ว' | 'กำลังจัดส่ง' | 'รอชำระเงิน' | 'ยกเลิก';
export type UserStatus = 'online' | 'away' | 'offline';

// interface สำหรับข้อมูลคำสั่งซื้อ
interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: OrderStatus;
}

// interface สำหรับข้อมูลผู้ใช้
interface User {
  name: string;
  lastActive: string;
  status: UserStatus;
  image: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, NgFor],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // สำหรับรองรับฟีเจอร์ในอนาคต เช่น การแสดงข้อมูลจริงจาก API

  // คลาสสำหรับสถานะต่างๆ ของคำสั่งซื้อ
  orderStatusClasses: Record<OrderStatus, string> = {
    'จัดส่งแล้ว': 'bg-green-100 text-green-800',
    'กำลังจัดส่ง': 'bg-orange-100 text-orange-800',
    'รอชำระเงิน': 'bg-yellow-100 text-yellow-800',
    'ยกเลิก': 'bg-red-100 text-red-800',
  };

  // คลาสสำหรับสถานะผู้ใช้งาน
  userStatusClasses: Record<UserStatus, string> = {
    online: 'bg-green-400',
    away: 'bg-yellow-400',
    offline: 'bg-gray-300',
  };

  // ข้อมูลตัวอย่างสำหรับแสดงผล
  recentOrders: Order[] = [
    { id: '#ORD-0042', customer: 'สมชาย มากมี', date: '20 ก.ค. 2023', total: '฿4,200', status: 'จัดส่งแล้ว' },
    { id: '#ORD-0041', customer: 'วิภา ใจดี', date: '19 ก.ค. 2023', total: '฿1,350', status: 'กำลังจัดส่ง' },
    { id: '#ORD-0040', customer: 'ธนา รักเรียน', date: '18 ก.ค. 2023', total: '฿2,790', status: 'รอชำระเงิน' },
    { id: '#ORD-0039', customer: 'นภา สมใจ', date: '17 ก.ค. 2023', total: '฿5,600', status: 'จัดส่งแล้ว' },
  ];

  activeUsers: User[] = [
    { name: 'วรรณา สมศักดิ์', lastActive: 'ออนไลน์เมื่อ 2 นาทีที่แล้ว', status: 'online',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'ชาญชัย วงศ์ทอง', lastActive: 'ออนไลน์เมื่อ 5 นาทีที่แล้ว', status: 'online',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'สุนีย์ ดวงดี', lastActive: 'ออนไลน์เมื่อ 15 นาทีที่แล้ว', status: 'online',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'ธีรพงศ์ สินธุ', lastActive: 'ออนไลน์เมื่อ 28 นาทีที่แล้ว', status: 'away',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'พิมพ์ใจ ไทยเจริญ', lastActive: 'ออนไลน์เมื่อ 48 นาทีที่แล้ว', status: 'offline',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  ];

  // Helper methods เพื่อแก้ปัญหา type
  getOrderStatusClass(status: string): string {
    return this.orderStatusClasses[status as OrderStatus] || '';
  }

  getUserStatusClass(status: string): string {
    return this.userStatusClasses[status as UserStatus] || '';
  }
}
