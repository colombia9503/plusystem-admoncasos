import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AlertComponent }   from './alert.component';


@NgModule({
  imports: [
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule,
        MaterializeModule,
        RouterModule
  ],
  exports: [AlertComponent],
  declarations: [AlertComponent],
  providers: [],
})
export class AlertModule { }
