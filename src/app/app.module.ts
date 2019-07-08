import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppMenuModule} from './app-menu/app-menu.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMenuModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
