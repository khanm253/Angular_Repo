import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_tuts';
  success = true;
  super = "wonder";
  contacts = [{
    name: 'Abd',
    id: 1
  }, {
    name: 'Asif',
    id: 2
  }, {
    name: 'Ikram',
    id: 3
  }]

  


}
