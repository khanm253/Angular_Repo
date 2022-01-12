import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clientList = [
    {
      id:1,
      fName: 'Abd',
      lName: 'Khan'
    },
    {
      id:2,
      fName: 'ikram',
      lName: 'Khan'
    },
    {
      id:3,
      fName: 'Asif',
      lName: 'Khan'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
