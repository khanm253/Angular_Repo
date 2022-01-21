import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  uid: string = "";

  constructor(private route: ActivatedRoute, 
    private userService: UserService, 
    private _snackBar: MatSnackBar, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.uid = data['id'];
    })
    
    this.userService.deleteUser(this.uid).subscribe(data => {
      this._snackBar.open('User deleted successfully');
      //this.router.navigate(['...','list'])
    }, error => console.log(error))
    
  }

}
