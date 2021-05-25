import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { API_BASE_URL } from './services/apiClient';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: API_BASE_URL, useValue: "https://localhost:44300"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
