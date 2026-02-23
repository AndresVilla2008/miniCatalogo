import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'miniCatalogo';

    products: Product [] = [];

    agregarProducto (producto: Product) {
        console.log('Agregando producto')
        this.products.push(producto);
    }

    eliminarProducto (id: number) {
        this.products = this.products.filter(p => p.id !== id);
        console.log('Se elimino el producto con id: ' + id);
    }

    get total(): number {
        return this.products.reduce((suma, producto) => suma + producto.price, 0);
    }

    precioMaximo: number = 0;

    get productosFiltrados(): Product[] {
        if (this.precioMaximo <= 0 || !this.precioMaximo) {
            return this.products;
        }
        return this.products.filter(p => p.price <= this.precioMaximo);
    }

    ordenarAsc() {
        this.products = [...this.products].sort((a, b) => a.price - b.price);
    }

    ordenarDesc() {
        this.products = [...this.products].sort((a, b) => b.price - a.price);
    }
}

