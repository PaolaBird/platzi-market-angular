import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailInput: FormControl;

  constructor() {
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email]);
    // this.emailInput.valueChanges.subscribe() para controlar los cambios dinamicos
  }

  ngOnInit(): void {
  }

  registerMail(): void {
    if (this.emailInput.valid) {
      console.log(this.emailInput.value);
    }
  }
}
