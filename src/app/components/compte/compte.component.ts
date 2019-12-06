import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {


  usr = {};

  submitToBack() {
    console.log(this.usr);
  }

  constructor() { }

  ngOnInit() {
  }

}