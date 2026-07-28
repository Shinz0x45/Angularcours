import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products/products';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private ActivatedRoute = inject(ActivatedRoute)

  productid!:number;
  products:any[] = [];
  product:any={}
  
  ngOnInit(){
    this.productid = Number(this.ActivatedRoute.snapshot.paramMap.get('id'));
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.product = this.products.find((p:any) => p.id == this.productid)
  }
}
