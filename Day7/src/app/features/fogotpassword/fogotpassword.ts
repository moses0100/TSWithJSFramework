import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fogotpassword',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './fogotpassword.html',
  styleUrl: './fogotpassword.css',
})
export class Fogotpassword {
  resetForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.resetForm.valid) {
      // แสดงข้อความว่าส่งอีเมลแล้ว
      this.isSubmitted = true;
      console.log('ส่งคำขอรีเซ็ตรหัสผ่านไปที่อีเมล:', this.resetForm.value.email);
      // ในการใช้งานจริงจะต้องส่งคำขอไปยัง API เพื่อส่งอีเมลรีเซ็ตรหัสผ่าน
    }
  }
}
