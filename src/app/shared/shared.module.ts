import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { SidenavModule } from './sidenav/index';
import { NavbarModule } from './navbar/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterializeModule
  ],
  exports: [SidenavModule, NavbarModule],
  declarations: []
})
export class SharedModule { }
