import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../core/services/products/products.service';
import {Router} from '@angular/router';
import {MyValidators} from '../../../utils/validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductsService,
              private router: Router) {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required]
    });
  }

  createProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe(res => {
        this.router.navigate(['admin/products']);
      });
    }

  }

}
