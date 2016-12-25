import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterializeModule
  ],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
