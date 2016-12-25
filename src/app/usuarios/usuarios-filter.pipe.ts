import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'usuariosFilter',
  pure: false
})

export class UsuariosFilterPipe implements PipeTransform {

  transform(value: any, args ?: any, filtertype ?: any): any {
    let filter = args;
    return filter ? value.filter(usuario => usuario.nombre.indexOf(filter) != -1): value;
  }

}
