import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';

import { EditModalComponent } from './edit-modal.component';

@NgModule({
  imports: [
    MaterializeModule, 
    RouterModule, 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditModalComponent],
  exports: [EditModalComponent]
})
export class EditModalModule { }
