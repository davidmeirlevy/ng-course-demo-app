import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  @Input() pages: Array<string>;
  @Output() navigated: EventEmitter<{name: string}> = new EventEmitter();

  name = 'david';

  constructor() { }

  ngOnInit() {
  }

  navigate(page: string) {
    this.navigated.emit({name: page});
  }

}
