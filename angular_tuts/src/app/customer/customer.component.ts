import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  firstname = ''
  terms: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addCustomer(form: NgForm){
    console.log(form.value);
    //form.reset();
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
