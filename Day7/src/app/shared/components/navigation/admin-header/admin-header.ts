import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  imports: [NgIf, RouterLink],
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader {
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  showProfileMenu = false;
  private closeTimeout: any = null;

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  onProfileMenuEnter() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.showProfileMenu = true;
  }

  onProfileMenuLeave() {
    this.closeTimeout = setTimeout(() => {
      this.showProfileMenu = false;
    }, 200);
  }
}
