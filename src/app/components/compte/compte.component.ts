import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {


  usr = {};

  submitToBack() {
    console.log(this.usr);
    environment.apiUrl;
  }

  constructor() { }

  ngOnInit() {
  }

}