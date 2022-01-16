import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-obsv',
  templateUrl: './obsv.component.html',
  styleUrls: ['./obsv.component.scss']
})
export class ObsvComponent implements OnInit {


  contacts$: any;
  users: any;
  status: any;

  constructor() { }

  ngOnInit(): void {

    this.users = ['abd', 'ibne', 'khan'] 

    this.contacts$ = of(this.users)

    

    console.log(this.contacts$)

    new Observable(observer => {
      setTimeout(() => {
        observer.next('Processing...')
      }, 2000);
      
      setTimeout(() => {
        observer.next('Loading...')
      }, 4000);
      
      setTimeout(() => {
        observer.next('Done!')
      }, 6000);
    }).subscribe(data => {
        this.status = data;
    }, error => {
      console.log(error)
    });
  }

}
