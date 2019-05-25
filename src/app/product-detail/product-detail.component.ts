import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productTitle: string;
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.productTitle = this.routeInfo.snapshot.params['prodTitle'];
  }

}
