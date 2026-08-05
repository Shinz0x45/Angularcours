import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { TransformPipe } from '../../pipes/transform-pipe';
import { ProductService } from '../../services/product-service';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-products',
  imports: [ProductCard, TransformPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productsService = inject(ProductService);
  products: any[] = []
  filtredProducts: any[] = [];

  searchSubject = new Subject<string>();



  ngOnInit() {
    this.loadProducts();

    this.searchSubject.pipe(
      map(value =>
        this.products.filter(product =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      )
    ).subscribe(res =>{
      this.filtredProducts = res;
    })
  }

  // this.products = JSON.parse(localStorage.getItem('products') || '[]')
  loadProducts() {
    this.productsService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.filtredProducts = res;
      },
      error: (err: any) => {
        alert('Erreur lors du chargement des produits !');
      }
    });
  }

  search(value: string) {
    this.searchSubject.next(value);
  }
  onDeleteProduct(id: number) {
    let productsTable = this.products.filter((p: any) => p.id !== id);
    // Mettre a jour le localStorage
    localStorage.setItem('products', JSON.stringify(productsTable))
    // Mettre a jour l'affichage du tableau
    this.products = productsTable
  }
}
