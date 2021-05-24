import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../../core/models/product.model';
import {CartService} from "../../../core/services/cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  public today = new Date();

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }


  addCart(): void {
    // this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
