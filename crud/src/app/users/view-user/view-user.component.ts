import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  uid: string = '';
  uDetails: any;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.uid = data['id'];
    })

    this.userService.viewUser(this.uid).subscribe(d => {
      this.uDetails = d;
    })
  }

}
