import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductoRoutingModule } from './producto-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProductoModule { }
