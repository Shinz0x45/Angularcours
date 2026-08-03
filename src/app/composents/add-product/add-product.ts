import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  private activatedroute = inject(ActivatedRoute)
  private productService = inject(ProductService)

  products: any[] = [];
  product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: ''
  };

  productID!: number
  isEditMode = false;

  ngOnInit() {
    // Récupérer les données du local storage
    // this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.productID = Number(this.activatedroute.snapshot.paramMap.get('id'));
    if (this.productID) {
      this.isEditMode = true;
      // this.product = this .products.find((p:any) => p.id === this.productID)
      this.productService.getProductById(this.productID).subscribe({
        next: (res: any) => {
          this.product = res;
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

  addOrEditProduct(productForm: NgForm) {
    if (this.isEditMode) {
      // localStorage.setItem('products', JSON.stringify(this.products));
      // alert('Produit Modifié !')
      this.productService.updateProductById(this.product).subscribe({
        next: (res: any) => {
          alert('Produit Modifié !');
        },
        error: (err: any) => {
          console.log(err);
          alert('Erreur lors de la modification du produit !');
        }
      })
    } else {
      this.productService.addProduct(productForm.value).subscribe({
        next: (res: any) => {
          alert('Produit ajouté avec succès !');
          productForm.resetForm();
        },
        error: (err: any) => {
          console.log(err);
          alert('Erreur lors de l\'ajout du produit !');
        }
      });
      // Ajouter id generer a partir de date/heure
      // this.product.id = Date.now();
      // Ajout de l'id en +1
      // this.product.id = this.products.length+1;
      // Ajouter le nouveau produit
      // this.products.push(this.product);
      // Enregistrer les données mises à jour dans le local storage
      // localStorage.setItem('products', JSON.stringify(this.products));
      // Créer une alerte
    }
  }}