import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fu-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  customForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.customForm = this.formBuilder.group( {
      name: ''
    } );
  }

}