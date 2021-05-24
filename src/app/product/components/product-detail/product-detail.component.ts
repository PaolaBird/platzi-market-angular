import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../core/models/product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../../core/services/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: ProductModel;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.productService.getProduct(params.id);
    });
  }

}
