import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AdminHeader } from '../../navigation/admin-header/admin-header';
import { AdminSidebar } from '../../sidebar/admin-sidebar/admin-sidebar';
import { AdminFooter } from '../../footer/admin-footer/admin-footer';

@Component({
  selector: 'app-admin-layout',
  imports: [NgClass, RouterOutlet, AdminHeader, AdminSidebar, AdminFooter],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
