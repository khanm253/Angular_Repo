import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addUser = this.formBuilder.group(
      {
        'name': new FormControl(),
        'email': new FormControl(),
        'phone': new FormControl(),
      }
    )
  }

  createUser(){
    console.log(this.addUser.value)
  }

}
