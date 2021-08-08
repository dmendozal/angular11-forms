import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  myForm: FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.minLength(3) ]   ],
    price: [ , [ Validators.required, Validators.min(0)] ],
    existenceCount: [ , [ Validators.required, Validators.min(0)] ],
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'RTX 4080ti',
      price: 1600
    });
  }


  fieldIsValid(campo: string ): boolean{
    return this.myForm.controls[campo].errors != null && this.myForm.controls[campo].touched;
  }

  save(): void {
    if ( this.myForm.invalid )  {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }



}
