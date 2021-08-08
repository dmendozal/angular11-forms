import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    notifications: [ true, Validators.required ],
    conditions: [ false, Validators.requiredTrue ]
  });

  persona = {
    gender: 'F',
    notifications: true,
  };


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.persona,
      conditions: false
    });

    this.myForm.valueChanges.subscribe( ({ conditions, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest;
    });

  }

  save(): void {

    const formValue = { ...this.myForm.value };
    delete formValue.condiciones;

    this.persona = formValue;

  }

}
