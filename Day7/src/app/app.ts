import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basic-angular-typescript');

  constructor() {
    const router = inject(Router);
    const route = inject(ActivatedRoute);
    const titleService = inject(Title);
    const metaService = inject(Meta);

    router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let current = route;
        while (current.firstChild) current = current.firstChild;
        return current;
      }),
      mergeMap((r) => r.data),
    ).subscribe((data) => {
      if (data['title']) {
        titleService.setTitle(data['title']);
      }
      if (data['description']) {
        metaService.updateTag({ name: 'description', content: data['description'] });
      }
      if (data['keywords']) {
        metaService.updateTag({ name: 'keywords', content: data['keywords'] });
      }
    });
  }
}
