import { Component, Inject, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/services/customer.model';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-custom',
  templateUrl: './edit-custom.component.html',
  styles: [
  ]
})
export class EditCustomComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) { }
  formData : Customer = new Customer();
  
  forms(form:NgForm){
    console.log(form);
  }

}
