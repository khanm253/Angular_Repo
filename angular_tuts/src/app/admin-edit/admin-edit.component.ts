import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  addType:any = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.addType = new FormGroup({
    //   'name': new FormControl,
    //   'desc': new FormControl,
    // });

    this.addType = this.formBuilder.group({
        'name': new FormControl('Edit this'),
        'desc': new FormControl('Change this'),
    })
  }

  addTypeMethod(){
    console.log(this.addType.value)
  }
}
