import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

    let users = new FormArray([
      new FormControl('ARC'),
      new FormControl('Tutorials'),
    ]);

    console.log(users.controls.forEach(i =>{
      console.log(i.value)
    }));

    this.addType = this.formBuilder.group({
        'name': new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
        ]),
        'desc': new FormControl,
        'users': new FormArray([
          new FormControl('ARC'),
          new FormControl('Tutorials'),
        ])
    })
  }

  addTypeMethod(){
    console.log(this.addType.value)
  }

  resetForm(){

    // try{
    //   if(this.addType.value){
    //     throw new Error('Hello')
    //   }
    // }catch(e){
    //   console.log(e)
    // }

    this.addType.reset();
  }
}
