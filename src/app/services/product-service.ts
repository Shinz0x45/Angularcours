
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  productURL = 'http://localhost:3000/products'

  private httpClient = inject(HttpClient)

  getAllProducts() {
    return this.httpClient.get<any[]>(this.productURL)
    .pipe(
      map(products  => {
        return products.map(product=> ({
          ...product,
          nameProd: product.name.toUpperCase(),
          priceWithTax: product.price * 1.19
        }))
      })
    );
  }

  addProduct(productObj: any) {
    return this.httpClient.post(this.productURL, productObj);
  }

  getProductById(id: number) {
    return this.httpClient.get(this.productURL + '/' + id);
  }

  deleteProductById(id:any) {
    return this.httpClient.delete(this.productURL + '/' + id);
  }
  updateProductById(productObj:any) {
    return this.httpClient.put(this.productURL + '/' +  productObj.id, productObj);
  }
}
