import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isDirty = true;
  
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params)
    });
  }

  ngOnInit(): void {
  }

}
