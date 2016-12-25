import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';

import { ClientesComponent } from './clientes.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterializeModule 
  ],
  declarations: [ClientesComponent],
  bootstrap: [ClientesComponent]
})
export class ClientesModule { }
