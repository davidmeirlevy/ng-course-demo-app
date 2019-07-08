import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from './app-menu.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppMenuComponent],
  exports: [AppMenuComponent]
})
export class AppMenuModule { }
