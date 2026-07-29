import { Component } from '@angular/core';
import { CategoryCard } from '../category-card/category-card';

@Component({
  selector: 'app-category',
  imports: [CategoryCard],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  categories = [
  {id:1, name: "Homme", img:"assets/images/homme.jpg"},
  {id:2, name: "Femme" , img:"assets/images/femme.jpg"},
  {id:3, name: "Enfant", img:"assets/images/enfants.jfif"},
]
}
