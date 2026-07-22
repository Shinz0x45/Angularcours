import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { Category } from '../category/category';
import { Products } from '../products/products';
import { Orders } from '../orders/orders';

@Component({
  selector: 'app-home',
  imports: [Banner, Category, Products, Orders],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
