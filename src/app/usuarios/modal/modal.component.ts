import { Component, OnInit, EventEmitter, Input,  Output } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
import { Usuario } from '../../shared/models/usuario';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
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
  @Input() modalActions = new EventEmitter<string|MaterializeAction>();

  //enviando intents a componente de usuarios
  @Output() response: EventEmitter<string> = new EventEmitter<string>();
  @Output() usuarioemitter: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  
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

  ngOnInit() {
    
  }
  
  onSubmit(value: any){
    this.usuarioemitter.emit(new Usuario(value));
    this.modalForm.reset();
  }

  closeModal() {
    this.modalActions.emit({action: "modal", params:['close']});
  }

}
