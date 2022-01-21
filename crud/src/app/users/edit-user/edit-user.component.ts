import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  uid: string = '';
  uDetails: any;
  formGroup : FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute
    ,private userService: UserService
    ,private formBuilder: FormBuilder
    ,private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(d => { this.uid = d['id']})

    if(this.uid != ''){
      this.userService.viewUser(this.uid)
      .toPromise()
      .then(data => {
        this.uDetails = data;
        console.log(this.uDetails)

        this.formGroup =  this.formBuilder.group(
          {
            'name': new FormControl(this.uDetails.name),
            'email': new FormControl(this.uDetails.email),
            'phone': new FormControl(this.uDetails.phone),
          }
        )
      })
      .catch(error => console.log(error))
    }
  }

  editUser(){
    this.userService.updateUser(this.uid, this.formGroup.value).subscribe(data => {
      this._snackBar.open('Edited User successfully')
    }, error => console.log(error))
  }
}
