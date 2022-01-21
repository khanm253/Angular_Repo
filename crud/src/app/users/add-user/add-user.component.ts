import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup = new FormGroup({});
  durationInSeconds = 5;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) { }

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
    this.userService.addUser(this.addUser.value).subscribe(data => {
      console.log(data)
      this._snackBar.open('User created successfully')
    }, e => {
      console.log(e)
    })
  }

}
