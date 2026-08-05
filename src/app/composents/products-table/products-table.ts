import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-table',
  imports: [CommonModule],
  templateUrl: './products-table.html',
  styleUrl: './products-table.css',
})
export class ProductsTable {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);

  products: any = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        alert('Error loading products');
      }
    });
  }

  voirDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  edit(id: number) {
    this.router.navigate(['/editProduct', id]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe({
      next: (res: any) => {
        this.loadProducts();
        alert('Produit supprimé !');
      },
      error: (err: any) => {
        alert('Erreur lors de la suppression du produit !');
      }
    });
  }
}