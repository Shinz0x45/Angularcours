import { Component } from '@angular/core';

@Component({
  selector: 'app-products-table',
  imports: [],
  templateUrl: './products-table.html',
  styleUrl: './products-table.css',
})
export class ProductsTable {
  products: any = [
    { id: 1, nom: 'Chemise', description: 'Description du produit Chemise', prix: 15 },
    { id: 2, nom: 'T-shirt', description: 'Description du produit T-shirt', prix: 10 },
    { id: 3, nom: 'Jeans', description: 'Description du produit Jeans', prix: 20 }
  ];
}
