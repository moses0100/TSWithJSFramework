import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/layouts/front-layout/front-layout').then(
        (module) => module.FrontLayout,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then((module) => module.Home),
        data: {
          title: 'หน้าแรก | Basic Angular App',
          description: 'หน้าแรกของระบบ',
          keywords: 'หน้าแรก, ระบบ, แอพพลิเคชั่น, งานบริการ',
        },
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about').then((module) => module.About),
        data: {
          title: 'เกี่ยวกับเรา | Basic Angular App',
          description: 'เกี่ยวกับเรา',
          keywords: 'เกี่ยวกับเรา, ระบบ, แอพพลิเคชั่น, งานบริการ',
        },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact').then((module) => module.Contact),
        data: {
          title: 'ติดต่อเรา | Basic Angular App',
          description: 'ติดต่อเรา',
          keywords: 'ติดต่อเรา, ระบบ, แอพพลิเคชั่น, งานบริการ',
        },
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./shared/components/layouts/admin-layout/admin-layout').then(
        (module) => module.AdminLayout,
      ),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then((module) => module.Dashboard),
        data: {
          title: 'แดชบอร์ด | Basic Angular App',
          description: 'แดชบอร์ดของระบบ',
          keywords: 'แดชบอร์ด, ระบบ, แอพพลิเคชั่น, งานบริการ',
        },
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login').then((module) => module.Login),
    data: {
      title: 'เข้าสู่ระบบ | Basic Angular App',
      description: 'เข้าสู่ระบบ',
      keywords: 'เข้าสู่ระบบ, ระบบ, แอพพลิเคชั่น, งานบริการ',
    },
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register').then((module) => module.Register),
    data: {
      title: 'สมัครสมาชิก | Basic Angular App',
      description: 'สมัครสมาชิก',
      keywords: 'สมัครสมาชิก, ระบบ, แอพพลิเคชั่น, งานบริการ',
    },
  },
  {
    path: 'fogotpassword',
    loadComponent: () =>
      import('./features/fogotpassword/fogotpassword').then(
        (module) => module.Fogotpassword,
      ),
    data: {
      title: 'ลืมรหัสผ่าน | Basic Angular App',
      description: 'ลืมรหัสผ่าน',
      keywords: 'ลืมรหัสผ่าน, ระบบ, แอพพลิเคชั่น, งานบริการ',
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found/not-found').then(
        (module) => module.NotFound,
      ),
    data: {
      title: '404 Not Found | Basic Angular App',
      description: 'ไม่พบหน้าที่คุณต้องการ',
      keywords: '404, ไม่พบหน้า, ระบบ, แอพพลิเคชั่น, งานบริการ',
    },
  },
];
