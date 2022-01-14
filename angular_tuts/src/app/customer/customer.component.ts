import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  firstname = ''
  terms: boolean = false;
  success: boolean = false;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  

  addCustomer(form: NgForm){
    console.log(form.value);

    let userTemp = {
      title: form.value.firstname,
      body: form.value.terms
    }

    this.userService.addUser(userTemp).subscribe(data => {
      this.success = true;
      console.log(data)
    }, (e) => {
      console.log(e)
    });
    //form.reset();
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
