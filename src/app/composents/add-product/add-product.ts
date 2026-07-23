import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  products: any[] = [];
  product = {
    name: '',
    price: 0,
    description: '',
    image: ''
  };

  addProduct(productForm:NgForm) {
// Récupérer les données du local storage
this.products = JSON.parse(localStorage.getItem('products') || '[]');
// Ajouter le nouveau produit
this.products.push(this.product);
// Enregistrer les données mises à jour dans le local storage
localStorage.setItem('products', JSON.stringify(this.products));
// Créer une alerte
alert('Produit ajouté avec succès !');
// 
productForm.resetForm();
 }

}
