import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  cName = "Hello"
  users: any;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  update(event: Event){
    console.log(event)
  }

}
