import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moteur',
  templateUrl: './moteur.component.html',
  styleUrls: ['./moteur.component.css']
})
export class MoteurComponent implements OnInit {

  constructor() { }

  @Output() changeFilter: EventEmitter<string> = new EventEmitter<string>(); 
  
  filter : string = "";

  ngOnInit() {
  }

  notifyChange()
  {
    this.changeFilter.emit(this.filter);
  }


}