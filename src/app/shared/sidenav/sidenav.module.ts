import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Materialize module
 */
import { MaterializeModule } from 'angular2-materialize';
/**
 * Components
 */
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    BrowserModule,
    RouterModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent]
})
export class SidenavModule { }
