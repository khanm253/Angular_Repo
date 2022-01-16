import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  title = 'angular_tuts';
  success = true;
  super = "wonder";
  percent = 0.69
  date = Date.now()
  // @ViewChild('headline')
  // headline: ElementRef;

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

  sayHello():void{
    console.log('Hello')
  }

    
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


}
