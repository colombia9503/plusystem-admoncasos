import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //title
  title: string;

  //gobal materialize actions
  globalActions = new EventEmitter<string|MaterializeAction>();

  //acciones del modal
  @Input() alertActions = new EventEmitter<string|MaterializeAction>();

  //intents
  @Output() response:EventEmitter<any> = new EventEmitter<any>();

  alertState(state: boolean){
    this.response.emit({execute: state});
  }

  closeModal() {
    this.alertActions.emit({action: "modal", params:['close']});
  }

}
