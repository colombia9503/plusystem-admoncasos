import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterializeModule
  ],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
