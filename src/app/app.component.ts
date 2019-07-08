import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-course-demo';

  pages = [
    'articles',
    'categories',
    'about',
  ];

  changeMenu() {
    this.pages = [
      ...this.pages,
      'profile' + Date.now(),
    ];
  }

  what($event) {
    console.log($event);
  }
}
