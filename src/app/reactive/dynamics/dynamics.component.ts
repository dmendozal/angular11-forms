import { Component } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favorites: this.fb.array([
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding', Validators.required ],
    ], Validators.required )
  });

  newFavorite: FormControl = this.fb.control('', Validators.required );

  get favoritesArray(): FormArray {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }


fieldIsValid(campo: string ): boolean {
    return this.myForm.controls[campo].errors != null && this.myForm.controls[campo].touched;
  }

  addFavorite(): void {
    if ( this.newFavorite.invalid ) { return; }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritesArray.push( this.fb.control(this.newFavorite.value, Validators.required ) );

    this.newFavorite.reset();

  }

  deleteFavorite(i: number ): void {
    this.favoritesArray.removeAt(i);
  }

  saveFavorite(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    // imprimir el valor del formulario, sólo si es válido
    console.log(this.myForm.value);
  }

}
