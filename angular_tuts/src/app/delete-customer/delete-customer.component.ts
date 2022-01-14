import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.userService.deleteUser(1).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

}
