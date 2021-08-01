import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'RTX 4080ti',
    price: 10,
    existenceCount: 10
  };

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid
            && this.myForm?.controls.product?.touched;
  }

  validPrice(): boolean {
    return this.myForm?.controls.price?.touched
            && this.myForm?.controls.price?.value < 0;
  }

  // save( myForm: NgForm ) {
  save(): void {
    // console.log( this.myForm );
    console.log('correctly post');

    this.myForm.resetForm({
      product: 'something',
      price: 0,
      existenceCount: 0
    });
  }

}
