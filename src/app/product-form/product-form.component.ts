import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  nombre = '';
  precio = 0;

  @Output() productCreated = new EventEmitter<Product>();

  agregar() {
    const nuevoProducto: Product = {
      id: Date.now(),
      name: this.nombre,
      price: this.precio
    };

    console.log('Emitiendo producto:', nuevoProducto);
    
    this.productCreated.emit(nuevoProducto)

    this.nombre = '';
    this.precio = 0;
  }
}
