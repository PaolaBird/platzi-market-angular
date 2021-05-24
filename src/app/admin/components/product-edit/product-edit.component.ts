import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../../core/services/products/products.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MyValidators} from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductsService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
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
      this.productService.updateProduct(this.id, product).subscribe(res => {
        this.router.navigate(['admin/products']);
      });
    }

  }
}
