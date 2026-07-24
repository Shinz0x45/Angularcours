import { Component } from '@angular/core';
import { UsersTable } from '../users-table/users-table';
import { ProductsTable } from '../products-table/products-table';
import { OrdersTable } from '../orders-table/orders-table';
import { MessagesTable } from '../messages-table/messages-table';

@Component({
  selector: 'app-admin',
  imports: [UsersTable, ProductsTable, OrdersTable, MessagesTable],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
