import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { TransformPipe } from '../../pipes/transform-pipe';

@Component({
  selector: 'app-products',
  imports: [ProductCard, TransformPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = []

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]')
  }

  onDeleteProduct(id: number) {
    let productsTable = this.products.filter((p: any) => p.id !== id);
    // Mettre a jour le localStorage
    localStorage.setItem('products', JSON.stringify(productsTable))
    // Mettre a jour l'affichage du tableau
    this.products = productsTable
  }
}
