import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css'],
})
export class CardformComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      Validators.maxLength(8),
    ]),
  });

  constructor() {
    console.log(this.cardForm.controls.name);
  }
}
