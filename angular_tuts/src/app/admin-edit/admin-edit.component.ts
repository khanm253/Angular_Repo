import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit{

  addType: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }
  trackChanges(): void {
    this.addType.statusChanges.subscribe(data => {
      console.log(data)
    });
  }

  ngOnInit(): void {
    // this.addType = new FormGroup({
    //   'name': new FormControl,
    //   'desc': new FormControl,
    // });

    this.addType = this.formBuilder.group({
        'name': new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
        ]),
        'desc': new FormControl(null),
    })
  }

  addTypeMethod(){
    console.log(this.addType.value)
  }

  resetForm(){
    this.addType.reset();
  }
}
