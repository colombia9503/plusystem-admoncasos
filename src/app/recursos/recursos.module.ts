import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';

import { RecursosComponent } from './recursos.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterializeModule
  ],
  declarations: [RecursosComponent],
  bootstrap: [RecursosComponent]
})
export class RecursosModule { }
