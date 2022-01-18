import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      console.log(data)
      this.users = data;
    })
  }

  goToUser(){
    
  }


}
