import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  producto = this.fb.group({
    nombre: [, Validators.required],
  });
  color = 'green';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  hasError(field: string) {
    return (
      (this.producto.get(field)?.invalid &&
        (this.producto.get(field)?.touched ||
          this.producto.get(field)?.dirty)) ||
      false
    );
  }

  guardar() {
    this.producto.markAllAsTouched();
    console.log('submit');
  }

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (_) =>
      Math.floor(Math.random() * 16).toString(16)
    );
    console.log(this.color);
  }
}
