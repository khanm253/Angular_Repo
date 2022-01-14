import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent implements OnInit {

  @Input()
  data: string;

  @Output()
  updatedList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateUsers(){
    let user = {name:'Abd', id: 12}
    this.updatedList.emit(user)
  }
}
