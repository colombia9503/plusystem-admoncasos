import { 
  Component, 
  OnInit,
  OnChanges, 
  trigger, 
  state, 
  style, 
  transition, 
  animate,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';
import { ModalModule } from './modal/modal.module';

import { Usuario } from '../shared/models/usuario';

import { UsuariosFilterPipe } from './usuarios-filter.pipe';

import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  animations: [
    //fade in - out
    trigger('show', [
      state('shown', style({ visibility: 'visible', opacity: 1 })),
      state('hidden', style({ visibility: 'hidden', opacity: 0})),
      transition('shown => hidden', animate('.3s ease-in')),
      transition('hidden => shown', animate('.3s ease-out'))
    ]),
    //slide in - out
    trigger('moved', [
      state('mvright', style({ transform: 'translateX(100%)' })),
      state('mvleft', style({ transform: 'translateX(0)' })),
      state('mvtright', style({ transform: 'translateX(200%)' })),
      transition('mvleft => mvright', animate('.3s ease-out')),
      transition('mvright => mvleft', animate('.3s ease-in')),
      transition('mvtright => *', animate('.3s ease-in')),
      transition('* => mvtright', animate('.3s ease-out'))
    ])
    //rotate table icon
  ],
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
  //edit modal 
  @ViewChild(EditModalComponent) editmodal: EditModalComponent;

  //materialize global actions
  globalActions = new EventEmitter<string|MaterializeAction>();

  //modal Modificar params
  modalUpdateActions = new EventEmitter<string|MaterializeAction>();

  //modal Agregar params
  modalActions = new EventEmitter<string|MaterializeAction>();

  //modal alert params
  alert_response: any;
  alert_request: any;
  alertActions = new EventEmitter<string|MaterializeAction>();

  //data bindings
  usuario: Usuario = new Usuario();
  datos: Usuario[] = [];
  index: number;

  //search field
  search: any;
  search_type: any;

  //form functions
  //modal $events
  onModalResponse(message:String){
    console.log(message);
  }

  openModalModificar(){
    this.editmodal.recibesObj(this.datos[this.selected_checks[0]]);
    this.modalUpdateActions.emit({action: "modal", params:['open']});
  }

  openModalAgregar(){
    //updated to 6.0.1 angular2 materialize llamado de las acciones del modal
    this.modalActions.emit({action: "modal", params:['open']});
  }

  deleteAlert(){
    this.alertActions.emit({action: "modal", params:['open']});
  }

  toastTrigger(){
    this.globalActions.emit({action: "toast", params: ['Registro(s) eliminado(s)', 3000]});
  }


  //data management
  onSave(marca:Usuario) {
    this.datos.push(new Usuario(marca));
    this.check_values.push(false);
  }

  onDelete(response: any) {
    let index: number;
    let users: Usuario[] = [];
    if(response.execute == true){
      //obtener objetos a eliminar en un array aparte
      for(let i = 0; i < this.selected_checks.length; i++){
        users.push(this.datos[this.selected_checks[i]]);
      }
      this.selected_checks = [];
      //obtener index del objeto y eliminarlo del array
      for(let i = 0; i < users.length; i++){
        /**
         * Se necesita el index debido a que cuando se eliminar un item 
         * el index del siguiente elemento cambia
         */
        index = this.datos.indexOf(users[i],0);
        this.datos.splice(index, 1);
        this.check_values.splice(index, 1);
      }

      if(this.getSelectedRows() <= this.datos.length){
        this.check_all = false;
      }
      this.animation(this.selected_checks);
      this.toastTrigger();
    }
  }

  onUpdate(usuario: Usuario){
    this.datos[this.selected_checks[0]] = usuario;
  }

  /**
   * DATATABLE INSTANCES
   */
  //visibilidad de las opciones
  visibility: string[] = ["shown", "hidden", "hidden"];
  //posicion de las opciones
  position: string[] = ["mvleft", "mvleft"];
  //opcines de busqueda
  search_focused: boolean = false;
  //seleccion de los checkboxes
  check_all: boolean = false;
  //selected checks box
  selected_checks: number[] = [];
  check_values: boolean[] = [];

  selectAll(check_all : boolean) {
    if (check_all) {
      for (let i = 0; i < this.datos.length; ++i) {
        this.check_values[i] = true;
        this.selected_checks.push(i);
      }
    }
    else {
      for (let i = 0; i < this.datos.length; ++i) {
        this.check_values[i] = false;
      }
      this.selected_checks = []; 
    }
    this.animation(this.selected_checks);
  }

  getSelectedRows(): number{
    let count: number = 0;
    for (let i = 0; i < this.check_values.length; ++i) {
      if(this.check_values[i] == true){
        ++count;
      }
    }
    return count;
  }

  //vista de las opciones y animaciones
  checked(checkId: number, checked: boolean){
    if (checked == true) {
      this.selected_checks.push(checkId);
      this.check_values[checkId] = true;
    } 
    else {
      let index = this.selected_checks.indexOf(checkId, 0);
      this.check_values[checkId] = false;
      if(index > -1){
        this.selected_checks.splice(index, 1);
      }
    }
    this.animation(this.selected_checks);
    if(this.getSelectedRows() < this.datos.length){
      this.check_all = false;

    }else if(this.getSelectedRows() == this.selected_checks.length){
      this.check_all = true;
    }
    //console.log('checkbox '+checkId+' has checked '+checked);
  }

  //animaciones de las opciones
  animation (array: any[]) {
    if (array.length == 0) {
      this.visibility[0] = "shown";
      this.visibility[2] = "hidden";
      this.visibility[1] = "hidden";
      this.position[0] = "mvleft";
      this.position[1] = "mvleft";
    }
    else if (array.length == 1) {
      this.visibility[0] = "hidden";
      this.visibility[2] = "shown";
      this.visibility[1] = "shown";
      this.position[0] = "mvright";
      this.position[1] = "mvright";
    }
    else if (array.length > 1) {
      this.visibility[0] = "hidden";
      this.visibility[1] = "hidden";
      this.visibility[2] = "shown";
      this.position[1] = "mvtright";
    }
  }

  //campo de busqueda clickeado
  search_focus(focus: boolean){
    this.search_focused = focus;
  }

}
