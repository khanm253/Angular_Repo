import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.id = param['id']
      }
    );
  }

  ngOnInit(): void {
  }

}
