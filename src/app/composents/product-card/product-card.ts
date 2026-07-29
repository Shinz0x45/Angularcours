import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() productInput:any;
  @Output() deleteProd = new EventEmitter;

  delete(id:number){
    this.deleteProd.emit(id);
  }

}
