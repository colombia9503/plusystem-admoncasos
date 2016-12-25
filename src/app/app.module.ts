import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { SharedModule } from './shared/index';
import { HomeModule } from './home/index';
import { LoginModule } from './login/index';
import { UsuariosModule } from './usuarios/index';
import { ClientesModule } from './clientes/index';
import { CasosModule } from './casos/index';
import { RecursosModule } from './recursos/index';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(routes),
    SharedModule,
    HomeModule,
    LoginModule,
    UsuariosModule,
    ClientesModule,
    CasosModule,
    RecursosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
