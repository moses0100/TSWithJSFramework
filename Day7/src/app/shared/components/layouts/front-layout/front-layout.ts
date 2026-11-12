import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../navigation/navbar/navbar';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-front-layout',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './front-layout.html',
  styleUrl: './front-layout.css',
})
export class FrontLayout {}
