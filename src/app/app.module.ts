import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { CountControlComponent } from './count-control/count-control.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDisplayComponent,
    CountControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
