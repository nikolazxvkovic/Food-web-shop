import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponent
  ]
})
export class AppModule { }
