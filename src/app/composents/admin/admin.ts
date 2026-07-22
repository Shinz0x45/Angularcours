import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersTable } from '../users-table/users-table';
import { ProductsTable } from '../products-table/products-table';
import { OrdersTable } from '../orders-table/orders-table';
@Component({
  selector: 'app-admin',
  imports: [RouterLink, UsersTable, ProductsTable, OrdersTable],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
