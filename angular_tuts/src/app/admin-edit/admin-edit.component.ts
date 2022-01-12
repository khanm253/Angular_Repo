import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  addType:any = null;

  constructor() { }

  ngOnInit(): void {
    this.addType = new FormGroup({
      'name': new FormControl,
      'desc': new FormControl,
    });
  }

  addTypeMethod(){
    console.log(this.addType.value)
  }
}
