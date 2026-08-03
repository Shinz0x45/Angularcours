import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products/products';
import { ProductService } from '../../services/product-service';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private ActivatedRoute = inject(ActivatedRoute)
  private productService = inject(ProductService)

  productid!:number;
  products:any[] = [];
  product:any={}
  
  ngOnInit(){
    this.productid = Number(this.ActivatedRoute.snapshot.paramMap.get('id'));
    this.productService.getProductById(this.productid).subscribe({
      next : (res:any) => {
        this.product = res;
      },
      error : (err:any) => {
        console.log(err);
      }
    })

  }
    //   this.products = JSON.parse(localStorage.getItem('products') || '[]');
  //   this.product = this.products.find((p:any) => p.id == this.productid)
}
