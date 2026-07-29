import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-table',
  imports: [],
  templateUrl: './products-table.html',
  styleUrl: './products-table.css',
})
export class ProductsTable {
  private router = inject(Router);
  products: any = [];

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]')
  }


  voirDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  edit(id: number){
    this.router.navigate(['/editProduct', id]);
  }
  deleteProduct(id: number) {
    let productsTable = this.products.filter((p:any) => p.id !== id);
    // Mettre a jour le localStorage
    localStorage.setItem('products', JSON.stringify(productsTable))
    // Mettre a jour l'affichage du tableau
    this.products = productsTable
  }
}