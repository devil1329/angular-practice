import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TempConverterPipe } from './temp-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FooterComponent
  ]
})
export class AppModule { }
