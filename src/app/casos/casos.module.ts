import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';

import { CasosComponent } from './casos.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterializeModule
  ],
  declarations: [CasosComponent],
  bootstrap: [CasosComponent]
})
export class CasosModule { }
