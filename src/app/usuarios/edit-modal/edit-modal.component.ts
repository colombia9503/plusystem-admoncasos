import { Component, OnChanges, EventEmitter, Input,  Output } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
import { Usuario } from '../../shared/models/usuario';

@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent {
  //form group
  modalForm: FormGroup;
  //abstract controls
  nombre: AbstractControl;
  cedula: AbstractControl;
  cargo: AbstractControl;
  telefono: AbstractControl;
  celular: AbstractControl;
  email: AbstractControl;
  clave: AbstractControl;

  //acciones del modal
  @Input() modalUpdateActions = new EventEmitter<string|MaterializeAction>();
  @Input() usuario:Usuario;

  //enviando intents a componente de usuarios
  @Output() response: EventEmitter<string> = new EventEmitter<string>();
  @Output() usuarioUpdateEmitter: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  
  //contruyendo el formulario
  constructor(form: FormBuilder) {
    this.modalForm = form.group({ 
      'nombre':['', Validators.required],
      'cedula':['', Validators.required],
      'cargo':['none', Validators.required],
      'telefono':['', Validators.required],
      'celular':['', Validators.required],
      'email':['', Validators.required],
      'clave':['', Validators.required],
    });
    this.nombre = this.modalForm.controls['nombre'];
    this.cedula = this.modalForm.controls['cedula'];
    this.cargo = this.modalForm.controls['cargo'];
    this.telefono = this.modalForm.controls['telefono'];
    this.celular = this.modalForm.controls['celular'];
    this.email = this.modalForm.controls['email'];
    this.clave = this.modalForm.controls['clave'];
  }
  
  onSubmit(value: any){
    this.usuarioUpdateEmitter.emit(new Usuario(value));
  }

  recibesObj(usuario: Usuario){
    this.nombre.patchValue(usuario.nombre);
    this.cedula.patchValue(usuario.cedula);
    this.cargo.patchValue(usuario.cargo);
    this.telefono.patchValue(usuario.telefono);
    this.celular.patchValue(usuario.celular);
    this.email.patchValue(usuario.email);
  }

  closeModal() {
    this.modalUpdateActions.emit({action: "modal", params:['close']});
  }

}
