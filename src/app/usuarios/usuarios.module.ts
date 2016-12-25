import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, Form } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { UsuariosComponent } from './usuarios.component';

import { ModalModule } from './modal/modal.module';
import { AlertModule } from './alert/alert.module';
import { EditModalModule } from './edit-modal/edit-modal.module';

import { UsuariosFilterPipe } from './usuarios-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterializeModule,
    FormsModule,
    ModalModule,
    AlertModule,
    EditModalModule
  ],
  declarations: [UsuariosComponent, UsuariosFilterPipe],
  bootstrap: [UsuariosComponent]
})
export class UsuariosModule { }
