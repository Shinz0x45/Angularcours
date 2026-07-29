import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  private activatedroute = inject(ActivatedRoute)

  products: any[] = [];
  product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: ''
  };

  productID!:number
  isEditMode = false;

  ngOnInit() {
    // Récupérer les données du local storage
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.productID = Number(this.activatedroute.snapshot.paramMap.get('id'));
    if (this.productID) {
      this.isEditMode = true;
      this.product = this .products.find((p:any) => p.id === this.productID)
    }
  }

  addOrEditProduct(productForm: NgForm) {
    if (this.isEditMode) {
      localStorage.setItem('products', JSON.stringify(this.products));
      alert('Produit Modifié !')

    } else {
      // Ajouter id generer a partir de date/heure
      this.product.id = Date.now();
      // Ajout de l'id en +1
      // this.product.id = this.products.length+1;
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
}
